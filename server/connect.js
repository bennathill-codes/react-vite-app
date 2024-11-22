import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { connect, connection } = mongoose;

let isConnected = false;

const connectToServer = async () => {
  const uri = process.env.ATLAS_URI;

  if (!uri) {
    console.error("ATLAS_URI is not defined");
    process.exit(1);
  }

  try {
    // connect to db
    await connect(uri, {
      serverSelectionTimeoutMS: 5000, // timeout if server not found
    });

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

// get database instance
const getDatabase = () => {
  if (!isConnected) {
    throw new Error("Currently disconnected from the database");
  }
  return mongoose.connection.db;
};

// listen for db events
connection.on("disconnected", () => {
  isConnected = false;
  console.log("MongoDB disconnected");
});

connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

// shutdown
process.on("SIGINT", async () => {
  await connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

export { connectToServer, getDatabase };
