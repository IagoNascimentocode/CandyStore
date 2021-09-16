import { Request, Response, Router } from "express";

const usersRoutes = Router();

usersRoutes.get('/hello',async (request:Request,response:Response): Promise<Response> => {
    return response.status(200).send("Hello Wrold")
})

export {usersRoutes}