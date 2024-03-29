import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config;

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✔ Listening on : localhost:${PORT}`);

app.listen(PORT, handleListening);