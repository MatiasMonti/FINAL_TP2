import express from "express";
import sondasRouter from "./src/routes/sondas.routes.js"

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", sondasRouter);

app.listen(PORT, () => console.log(`Server listening on: ${PORT}`));

app.on("error", (error) => console.log(`ERROR: ${error}`));