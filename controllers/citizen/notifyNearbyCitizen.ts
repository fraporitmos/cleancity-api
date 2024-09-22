import { Request, Response } from 'express';
import axios from 'axios';

import * as geolib from 'geolib';
import { pushCitizens } from '../notification/pushCitizens';

import { BASE_URL_CITIZEN } from '../../server/base_urls';
import { Coordinate } from '../../model/Coordinate';
import { CitizenResponse } from '../../model/CitizenResponse';
import { Citizen } from '../../model/Citizen';

export const notifyNearbyCitizen = async (req: Request, res: Response) => {
  const { polygon }: { polygon: Coordinate[] } = req.body;

  try {
    const response = await axios.get<CitizenResponse>(BASE_URL_CITIZEN, {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    });

    const data: CitizenResponse = response.data;
    
    const citizensInPolygon: Citizen[] = data.items.filter((citizen) => {
      const point = {
        latitude: parseFloat(citizen.latitude),
        longitude: parseFloat(citizen.longitude),
      };
      return geolib.isPointInPolygon(point, polygon);
    });

    citizensInPolygon.forEach(citizen => {
      if(citizen.notifyWhenNearby == true){
          pushCitizens(
            citizen.token,
            "El camión esta cerca 📍",
            "Saca tu basura el camión esta cerca a tu domicilio.",
            (status: number, msg: string) => {
              console.log(`Status: ${status}, Message: ${msg}`);
            }
          )
      }
    })

    res.status(200).json({
      users: citizensInPolygon,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Algo salió mal, hable con el administrador.",
    });
  }
};