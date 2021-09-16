import { Request, Response, Router } from "express";
import { usersRoutes } from "./users.routes";

const router = Router();

router.get('users', usersRoutes)

export {router}