import { ClearController } from './modules/clear/clearController';
import { Router } from "express";
import { ensureTableEmpty } from "./middlewares/ensureTableEmpty";
import { PopulateController } from "./modules/populate/populateController";
import { ensureTableNotEmpty } from './middlewares/ensureTableNotEmpty';
import { FilmsController } from './modules/films/filmsController';

const routes = Router();

const populateController = new PopulateController();
routes.get("/populate", ensureTableEmpty, populateController.handle);

const clearController = new ClearController();
routes.get("/clear", ensureTableNotEmpty, clearController.handle);

const filmsController = new FilmsController();
routes.get("/films", ensureTableNotEmpty, filmsController.handle);

export { routes };