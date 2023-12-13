import express from "express";

import { PORT, mongoDBURL } from "./config.js";
import { connect } from './node_modules/@types/node/http2.d';

const app = express();
app.get('/', (Request, Response) =>{
    console.log(Request);
    return Response.status(234).send('welcome to mern stack tutorial');
});


mongoos
    .connect(mongoDBURL)
    .then(,()=>{
        console.log(`App is listening to port: ${PORT}`)
        app.listen(PORT, () =>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })

