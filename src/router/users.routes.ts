import { Request, Response, Router } from "express";
import { Repository } from "typeorm";
import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";

const usersRoutes = Router();


usersRoutes.post('/')
usersRoutes.get('/')
export {usersRoutes}