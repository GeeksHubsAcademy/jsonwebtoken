const express = require( 'express' ); // importamos la liberia express
const app = express(); //generamos la app de backend a partir de express
const jwt = require( 'jsonwebtoken' );

app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authenticate" );
    res.header( "Access-Control-Allow-Methods", "POST, PATCH, PUT, DELETE" );
    next();
} );
app.use( express.json() )

app.get( '/login', ( req, res ) => {

    const token = jwt.sign( {
        id: 587,
    }, "a5sd19d1sa98ds89aads8", { expiresIn: "7d" } ) //generamos el token
    res.json( { token } );
} )
app.patch( '/updateProfile/', (req,res) => {
    console.log( req.headers.authenticate );
    console.log(req.body)
} )
app.listen( 3001, () => console.log( 'servidor levantado' ) ) //aquí ponemos el servidor a la escucha de peticiones en el puerto 3001
