import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => { //El next funciona si hay un token continua, si no lo hay manda un mensaje
    const { token } = req.cookies;

    if (!token)
        return res.status(401).json({ message: "No hay token, acceso denegado." });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Token invalido" });

        req.user = user;

        next();
    })
}