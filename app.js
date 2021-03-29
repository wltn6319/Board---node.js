import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";
import homeRouter from "./routers/homeRouter";
import boardRouter from "./routers/boardRouter";
import cookieParser from "cookie-parser";

const app = express();

app.use('/JS', express.static(__dirname + '/node_modules/jquery/dist'));

app.use(helmet());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); 
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes.home, homeRouter)
app.use(routes.board, boardRouter);

app.use('/uploads', express.static('uploads')); //업로드 path 추가

export default app;