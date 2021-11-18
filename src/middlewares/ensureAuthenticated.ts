import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";

interface Ipayload{
    sub:string;
}


export async function ensureAuthenticated(request:Request,response:Response,next:NextFunction){
    
    const authToken = request.headers.authorization

    if (!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")
    
    try{
        const {sub:user_id} = verify(token,"shhh") as Ipayload
    
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findUserByID({id:user_id})
        
        if(!user){
            throw Error("User does not exists!")
        }

        return next()
    }catch{
        throw new Error("Invalid Token!")
    }
    
}