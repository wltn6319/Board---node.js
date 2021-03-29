import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

const handlOpen = () => console.log("✔ Connected to DB");
const handlError = () => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handlOpen);
db.on("error", handlError);
