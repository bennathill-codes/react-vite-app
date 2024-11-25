import express from "express";
import { getDatabase } from "./connect.js";
import { ObjectId } from "mongodb";

let userRoutes = express.Router();

// get all users
userRoutes.route("/users").get(async (req, res) => {
  let db = getDatabase();

  let data = await db.collection("users").find({}).toArray();

  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("Data not found");
  }
});

// get user
userRoutes.route("/users/:id").get(async (req, res) => {
  let db = getDatabase();

  let data = await db
    .collection("users")
    .findOne({ _id: new ObjectId(req.params.id) });

  if (Object.keys(data).length > 0) {
    res.json(data);
  } else {
    throw new Error("Data not found");
  }
});

// create user
userRoutes.route("/users").post(async (req, res) => {
  let db = getDatabase();
  let mongoObject = {
    email: req.body.email,
    password: req.body.password,
  };

  let data = await db.collection("users").insertOne(mongoObject);
  res.json(data);
});

// update user
userRoutes.route("/users/:id").put(async (req, res) => {
  let db = getDatabase();
  let mongoObject = {
    $set: {
      email: req.body.email,
      password: req.body.password,
    },
  };

  let data = await db
    .collection("users")
    .updateOne({ _id: new ObjectId(req.params.id) }, mongoObject);
  res.json(data);
});

// delete user
userRoutes.route("/users/:id").delete(async (req, res) => {
  let db = getDatabase();

  let data = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(data);
});

export default userRoutes;
