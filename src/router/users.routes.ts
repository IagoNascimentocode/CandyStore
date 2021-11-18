import { Router } from "express";
import { AuthenticateController } from "../modules/accounts/useCases/authenticateUser/AuthenticateController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";
import { FindUserByIdController } from "../modules/accounts/useCases/findUserByID/FindUserByIDController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";
import { FetchController } from "../modules/pagar.me.api/UseCase/FetchController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const findUserByIDController = new FindUserByIdController();
const deleteUserController = new DeleteUserController();;
//const fetchController = new FetchController();
const authenticateController = new AuthenticateController();

//usersRoutes.get('/fetch',fetchController.handle);
usersRoutes.post('/login',authenticateController.handle);
usersRoutes.post('/',createUserController.handle);
usersRoutes.get('/', ensureAuthenticated ,listAllUsersController.handle);
usersRoutes.get('/:id', ensureAuthenticated ,findUserByIDController.handle);
usersRoutes.delete('/delete', ensureAuthenticated ,deleteUserController.handle);

export {usersRoutes}