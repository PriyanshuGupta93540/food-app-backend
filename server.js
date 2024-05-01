import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import resturantRoute from "./routes/resturantRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";

const app = express();

// dotenv configw678
dotenv.config();

// database connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/resturant", resturantRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/food", foodRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome in Food Server");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running at : ${PORT}`.white.bgMagenta);
});
