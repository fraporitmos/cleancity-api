import { Request, Response } from "express";
import { privateKey } from "./privateKey";
const { JWT } = require('google-auth-library');
const fetch = require("node-fetch");

export const pushCitizens = async (
    token: string,
    titulo: string,
    descripcion: string,
    result: (status: number, msg: string) => void
) => {

    try {
        const jwtClient = new JWT(
            privateKey.client_email,
            null,
            privateKey.private_key,
            ['https://www.googleapis.com/auth/cloud-platform']
        );

        const tokens = await jwtClient.authorize();
        const accessToken = tokens.access_token;

        const notificationContext = {
            "message": {
                "token": token,
                "notification": {
                    "body": descripcion,
                    "title": titulo,

                },
                "data": {
                    "title": titulo,
                    "body": descripcion,
                    "activity": "CitizenActivity",
                },
                "android": {
                    "notification": {
                        "body": descripcion,
                        "title": titulo
                    }
                }
            }
        };

        const response = await fetch('https://fcm.googleapis.com/v1/projects/clean-city-d4e97/messages:send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(notificationContext)
        });

        if (response.status === 200) {
            result(200, "Notificación enviada exitosamente");
        } else {
            result(response.status, "Error al enviar la notificación");
        }
    } catch (error) {
        result(400, "Error en el envío");
    }
};