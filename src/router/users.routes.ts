import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";
import { FindUserByIdController } from "../modules/accounts/useCases/findUserByID/FindUserByIDController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const findUserByIDController = new FindUserByIdController();
const deleteUserController = new DeleteUserController();;

usersRoutes.post('/',createUserController.handle);
usersRoutes.get('/',listAllUsersController.handle);
usersRoutes.get('/:id',findUserByIDController.handle);
usersRoutes.delete('/delete',deleteUserController.handle);

export {usersRoutes}