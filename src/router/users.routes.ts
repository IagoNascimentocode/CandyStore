import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { FindUserByIdController } from "../modules/accounts/useCases/findUserByID/FindUserByIDController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const findUserByIDController = new FindUserByIdController();

usersRoutes.post('/',createUserController.handle);
usersRoutes.get('/',listAllUsersController.handle);
usersRoutes.get('/:id',findUserByIDController.handle);

export {usersRoutes}