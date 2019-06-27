const express=require('express');// importamos la liberia express
const app=express();//generamos la app de backend a partir de express
const jwt=require('jsonwebtoken');

app.get('/',(req,res)=>{
    const token=jwt.sign({id:587},"a1sd891a8sda89s")
})

app.listen(3001,()=>console.log('servidor levantado'))//aquí ponemos el servidor a la escucha de peticiones en el puerto 3001