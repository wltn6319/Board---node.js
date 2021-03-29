import express from "express";
import {  getlist, boardCreate, board_create_summit, boardDetail, boardUpdate, boardDelete, boardUpdate_summit } from "../controllers/boardController";
import routes from "../routes";


const boardRouter = express.Router();

boardRouter.get(routes.list, getlist);

boardRouter.get(routes.boardCreate,  boardCreate);
boardRouter.post(routes.boardCreate,  board_create_summit);

boardRouter.get(routes.boardUpdate, boardUpdate);
boardRouter.post(routes.boardUpdate,  boardUpdate_summit);

boardRouter.get(routes.boardDetail,  boardDetail);
boardRouter.get(routes.boardDelete,  boardDelete);


export default boardRouter;