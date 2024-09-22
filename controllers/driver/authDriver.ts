import { Request, Response } from 'express';
import { DriverResponse } from '../../model/DriverResponse';
import { BASE_URL_DRIVER } from '../../server/base_urls';
import axios from 'axios';

export const authDriver = async (req: Request, res: Response) => {
    const { correo, clave }: any = req.body;

    try {
        const response = await axios.get<DriverResponse>(BASE_URL_DRIVER, {
            headers: {
                'x-api-key': "b54c58a4-xair-6626-kqmk-5be7b0991a2b"
            }
        });

        const data: DriverResponse = response.data;
        const isAuthSucces = data.items.filter(
            driver => driver.user === correo 
            && driver.password === clave
        )

        if (isAuthSucces.length > 0) {
            res.status(200).json({
                msg: "Acceso correcto",
                information: isAuthSucces[0],
            });
        } else {
            res.status(400).json({
                msg: "Credenciales invalidas",
                information: {}
            });
        }


    } catch (error) {
        res.status(500).json({
            msg: "Algo salió mal, hable con el administrador." + error,
        });
    }
};
