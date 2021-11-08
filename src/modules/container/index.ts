import { container } from "tsyringe";

import { IUsersRepository } from "../accounts/repositories/IUsersRepository";
import { UsersRepository } from "../accounts/repositories/UsersRepository";

import { IProductsRepository } from "../product/repositories/IProductsRepository";
import { ProductsRepository } from "../product/repositories/ProductsRepository";

import { IShelvesRepository } from "../shelf/repositories/IShelvesRepository";
import { ShelvesRepository } from "../shelf/repositories/ShelvesRepository";

import { IStoreRepository } from "../store/repositories/IStoreRepository";
import { StoreRepository } from "../store/repositories/StoreRepository";

import { IShoppingCartRepository } from "../shoppingCart/repositories/IShoppingCartRepository";
import { ShoppingCartRepository } from "../shoppingCart/repositories/ShoppingCartReposiory";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
)

container.registerSingleton<IShelvesRepository>(
    "ShelvesRepository",
    ShelvesRepository
)

container.registerSingleton<IStoreRepository>(
    "StoreRepository",
    StoreRepository
)

container.registerSingleton<IShoppingCartRepository>(
    "ShoppingCartRepository",
    ShoppingCartRepository
)