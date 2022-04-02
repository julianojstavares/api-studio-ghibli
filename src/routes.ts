import { ClearController } from './modules/clear/clearController';
import { Router } from "express";
import { ensureTableEmpty } from "./middlewares/ensureTableEmpty";
import { PopulateController } from "./modules/populate/populateController";
import { ensureTableNotEmpty } from './middlewares/ensureTableNotEmpty';

const routes = Router();

const populateController = new PopulateController();
routes.get("/populate", ensureTableEmpty, populateController.handle);

const clearController = new ClearController();
routes.get("/clear", ensureTableNotEmpty, clearController.handle);

export { routes };