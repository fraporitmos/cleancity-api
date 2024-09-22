import { Request, Response } from 'express';
import axios from 'axios';

import { pushCitizens } from '../notification/pushCitizens';

import { BASE_URL_CITIZEN } from '../../server/base_urls';
import { CitizenResponse } from '../../model/CitizenResponse';

export const notifyStartCitizen = async (req: Request, res: Response) => {
  const { idRoute } = req.body;

  try {
    const response = await axios.get<CitizenResponse>(BASE_URL_CITIZEN, {
      headers: {
        'x-api-key': "b54c58a4-xair-6626-kqmk-5be7b0991a2b"
      }
    });

    const data: CitizenResponse = response.data;
    const citizenInRoute = data.items.filter( items => items.idRoute === idRoute )

    citizenInRoute.forEach(citizen => {
        if(citizen.notifyStartTracking == true){
            pushCitizens(
              citizen.token,
              "El camión inició su recorrido 🚛",
              "Saca tu basura el camión pasará pronto por tu domicilio.",
              (status: number, msg: string) => {
                console.log(`Status: ${status}, Message: ${msg}`);
              }
            )
        }
      })

    res.status(200).json({
      users: citizenInRoute,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Algo salió mal, hable con el administrador.",
    });
  }
};