import { Router } from "express";
import { PopulateController } from "./modules/populate/populateController";

const routes = Router();

const populateController = new PopulateController();
routes.get("/populate", populateController.handle);

export { routes };