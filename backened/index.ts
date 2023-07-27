import express, { Request, Response } from 'express';
import cors from 'cors';
import { connection } from "./Config/db";
import { auth } from "./Middleware/auth";
import { userRouter } from "./Router/Loginregister";
import { shopRouter } from "./Router/Shoppingrouter";
import { shopDataRouter } from "./Router/Shopingdata";

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/user", userRouter);
app.use("/", shopDataRouter);
app.use(auth);
app.use("/shop", shopRouter);

const port = process.env.port||""
app.listen(port, async()=>{
    try {
        await connection;
        console.log("DB Connected");
      } catch (error) {
        console.log("error connecting to db");
      }
    console.log(`Server running at port ${port}`);
    
})
