import "dotenv/config";
import "reflect-metadata";
import express, { Request, Response } from "express";
import 'express-async-errors'
import { router } from "./router";
import "./modules/container";
import "./database";

const app = express();

app.use(express.json());
app.use(router);
app.use((err:Error,request:Request,response:Response)=>{

    if (err instanceof Error) {
        return response.status(400).json({error:err.message})
    }  

    return response.status(500).json({status:"error", message:"Internal Server Error"})

})

app.listen(1024, () => console.log("Server running on the port:1024"));
