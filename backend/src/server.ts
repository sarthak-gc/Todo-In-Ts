import express, { Request, Response } from "express";
import userRoute from "./routes/userRoutes";
import cors from "cors";
import todoRoute from "./routes/todoRoutes";
const app = express();
import "./db/db";

app.get("/", (req: Request, res: Response) => {
  console.log("/home hit");
  res.json({
    message: "This is home route",
  });
});
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/todo", todoRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on http://localhost:", port);
});
