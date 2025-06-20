import express from 'express';
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const db = await connectDB();

db.on("error", (error) => {
    console.error("Database connection error:", error);
});

db.once("open", () => {
    console.log("Database connected successfully!");
})

const app = express();

routes(app);

export default app;

