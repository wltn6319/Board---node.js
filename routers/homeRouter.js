import express from "express";
import { getHome } from "../controllers/homeController";
import routes from "../routes";


const homeRouter = express.Router();

homeRouter.get(routes.home, getHome);




export default homeRouter;