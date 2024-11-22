import { connectToServer } from "./connect.js";
import express from "express";
import cors from "cors";
import users from "./userRoutes.js";

const app = express();
const PORT = 3000;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:" + PORT,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(users);

app.listen(PORT, () => {
  connectToServer();
  console.log(`Server is running on port: ${PORT}...`);
});
