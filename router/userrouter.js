const express=require("express");
const router=express.Router();
const userModule=require("../module/user");
const auth=require("../module/authmodule");

router.get("/get",userModule.getuser);

router.put("/update/:userid",auth.authorizeuser,userModule.updateuser);

router.delete("/delete/:id",auth.authorizeuser,userModule.deleteuser);

router.post("/create",auth.authorizeuser,userModule.createuser);

module.exports=router;