import express from "express";

import { PORT } from "./config.js";

const app = express();
app.get('/', (Request, Response) =>{
    console.log(Request);
    return Response.status(234).send('welcome to mern stack tutorial');
});
app.listen(PORT, () =>{
    console.log(`App is listening to port: ${PORT}`);
});