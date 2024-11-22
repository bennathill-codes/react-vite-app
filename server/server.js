import connectToServer from "./connect.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  connectToServer();
  console.log(`Server is running on port: ${PORT}...`);
});
