const express = require( 'express' ); // importamos la liberia express
const app = express(); //generamos la app de backend a partir de express
const jwt = require( 'jsonwebtoken' );

app.get( '/login', ( req, res ) => {

    const token = jwt.sign( { id: 587,
     }, "a5sd19d1sa98ds89aads8", { expiresIn: "7d" } ) //generamos el token
    console.log( token )
    const payload = jwt.verify( token, "a5sd19d1sa98ds89aads8" ) //aquí extraigo el payload del token utilizando el secreto
    res.send( token, payload );
} )

app.listen( 3001, () => console.log( 'servidor levantado' ) ) //aquí ponemos el servidor a la escucha de peticiones en el puerto 3001
