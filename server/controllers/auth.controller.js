import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { email, password, username } = req.body; //Voy a esperar que me evien un email,un username y un password
    console.log(email, password, username);

    try {

        const passwordHash = await bcrypt.hash(password, 10); //Hash combierte un strng a una serie de caracteres

        //Vamos a instanciar, esto crea el objeto y después lo podemos alterar
        const newUser = new User({
            username,
            email,
            password: passwordHash //La contraseña tiene como valor a passwordHash
        })

        const userSaved = await newUser.save(); //Esto es asincrono, además aca se guarda el nuevo usario

        //Aca se crea el token
        const token = await createAccessToken({
            id: userSaved._id
        });
        res.cookie('token', token); //Lo vas a guardar en una cookie

        //Esto es para que solo nos devuelvan algunos datos en especifico
        res.json(
            {
                id: userSaved._id,
                username: userSaved.username,
                email: userSaved.email,
                createdAT: userSaved.createdAt,
                updatedAT: userSaved.updatedAt
            }
        ); //Pasa el usuario a json y devuelbe el objeto
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body; //Voy a esperar que me evien un email,un username y un password

    try {
        const userFound = await User.findOne({email}) //Buscara el usuario en la base de datos
        if (!userFound) return res.status(400).json({message: "Credenciales incorrectas."})

        const isMatch = await bcrypt.compare(password, userFound.password); //comparara la conttraseña introducida por el usuario con la que hay en la base de datos

        if (!isMatch) return res.status(400).json({message: "Credenciales incorrectas."})

        //Aca se crea el token
        const token = await createAccessToken({
            id: userFound._id
        });
        res.cookie('token', token); //Lo vas a guardar en una cookie

        //Esto es para que solo nos devuelvan algunos datos en especifico
        res.json(
            {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAT: userFound.createdAt,
                updatedAT: userFound.updatedAt
            }
        ); //Pasa el usuario a json y devuelbe el objeto
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id); //Nos apareceran todos los datos que le pertenecen al usuario
    
    if(!userFound) return res.status(401).json({message: "Usuario no encontrado."});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    
    res.send('profile');
}

