import { container } from "tsyringe";

import { IUsersRepository } from "../accounts/repositories/IUsersRepository";
import { UsersRepository } from "../accounts/repositories/UsersRepository";

import { IProductsRepository } from "../product/repositories/IProductsRepository";
import { ProductsRepository } from "../product/repositories/ProductsRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
)