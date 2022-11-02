const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const auth=require("./module/authmodule");
const userRouter=require("./router/userrouter");
const registerrouter=require("./router/registerrouter");
const questionrouter=require("./router/questionrouter");
const questionmodule=require("./module/questionmodule");
const mongo=require("./connect");
dotenv.config();
mongo.connect();
const app=express();
app.use(express.json());
app.use(cors());


app.use("/register",registerrouter);
app.use("/",auth.authenticateuser);
app.use("/question",questionrouter);
app.use("/user",userRouter);


app.listen(process.env.PORT || 3001);