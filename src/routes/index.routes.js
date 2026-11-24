import { Router } from "express";
import { cursosRouter } from "./cursos.routes.js";

const routes = Router();

routes.use(cursosRouter);

export default routes;
