import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
    //Crear el jwt

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: '1d'
            },
            // callback
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );
    })
}