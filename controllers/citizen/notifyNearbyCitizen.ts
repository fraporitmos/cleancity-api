import { Request, Response } from 'express';
import axios from 'axios';

import * as geolib from 'geolib';
import { pushCitizens } from '../notification/pushCitizens';

import { BASE_URL_CITIZEN, BASE_URL_COLLECTOR } from '../../server/base_urls';
import { Coordinate } from '../../model/Coordinate';
import { Citizen } from '../../model/Citizen';
import { CitizenResponse } from '../../model/CitizenResponse';

export const notifyNearbyCitizen = async (req: Request, res: Response) => {
  const { data , idCollector, lat, lng} = req.query;
  var location = processGNRMC(data,lat,lng)!!

  if (!location.latitude && !location.longitude) {
     return res.status(400).json({ msg: 'La ubicación en formato gnrmc son requeridas' });
  }
  
  updateCoordinatesInPocketBase(idCollector, location)

  try {
    const response = await axios.get<CitizenResponse>(BASE_URL_CITIZEN, {
      headers: {
        'x-api-key': "b54c58a4-xair-6626-kqmk-5be7b0991a2b"
      }
    });

    const data: CitizenResponse = response.data;
    const citizenRadius = 400
    const polygon = generatePolygonPoints(location.latitude, location.longitude, citizenRadius);

    const citizensInPolygon: Citizen[] = data.items.filter((citizen) => {
      const point = {
        latitude: parseFloat(citizen.latitude),
        longitude: parseFloat(citizen.longitude),
      };
      return geolib.isPointInPolygon(point, polygon);
    });

    citizensInPolygon.forEach(citizen => {
      if (citizen.notifyWhenNearby) {
        pushCitizens(
          citizen.token,
          "El camión está cerca 📍",
          "Saca tu basura, el camión está cerca de tu domicilio.",
          (status: number, msg: string) => {
            console.log(`Status: ${status}, Message: ${msg}`);
          }
        );
      }
    });

    res.status(200).json({
      users: citizensInPolygon,
    });

  } catch (error) {
    res.status(500).json({
      msg: "Algo salió mal, hable con el administrador.",
    });
  }
};

async function updateCoordinatesInPocketBase(id: any, coordinates: Coordinate) {
  try {
    const response = await axios.patch(`${BASE_URL_COLLECTOR}/${id}`, {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    }, {
      headers: {
        'x-api-key': "b54c58a4-xair-6626-kqmk-5be7b0991a2b",
      }
    
    });
    if(response.status == 200){
      console.log(`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`)
    }

    return response.data;
  } catch (error) {
    console.error('Error al actualizar las coordenadas:', error);
    throw error;
  }
}


function generatePolygonPoints(lat: number, lon: number, radius: number): Coordinate[] {
  const points: Coordinate[] = [];
  const numPoints = 36;
  const radiusInKm = radius / 1000.0;
  const latRadians = degreesToRadians(lat);

  for (let i = 0; i < numPoints; i++) {
    const angle = Math.PI * 2 * i / numPoints;
    const dx = radiusInKm * Math.cos(angle);
    const dy = radiusInKm * Math.sin(angle);
    const newLat = lat + (dy / 111.32);
    const newLon = lon + (dx / (111.32 * Math.cos(latRadians)));
    points.push({ latitude: newLat, longitude: newLon });
  }

  return points;
}

function degreesToRadians(degrees: number): number {
  return degrees * Math.PI / 180;
}


function convertNMEAtoDecimal(coordinate: string, direction: string): number {
  let degreesLength = (direction === 'N' || direction === 'S') ? 2 : 3;
  const degrees = parseInt(coordinate.slice(0, degreesLength), 10);
  const minutes = parseFloat(coordinate.slice(degreesLength));
  let decimal = degrees + (minutes / 60);
  if (direction === 'S' || direction === 'W') {
    decimal *= -1;
  }

  return decimal;
}

function processGNRMC(data: any, lat:any, lng:any): Coordinate | null {
  if(data != undefined){
    const parts = data.split(',');
    if (parts[2] === 'A') {
      const latitude = convertNMEAtoDecimal(parts[3], parts[4]);
      const longitude = convertNMEAtoDecimal(parts[5], parts[6]);
      return {
        latitude,
        longitude,
      };
    }else{
      return null;
    }
  }else {
    var latitude = parseFloat(lat)
    var longitude = parseFloat(lng)

    return {
      latitude,
      longitude
    }
  }
}

 