const express=require("express");
const router=express.Router();
const companyModule=require("../module/companymodule");
const auth=require("../module/authmodule");

router.get("/get",companyModule.getcompanies);

router.put("/update/:userid",auth.authorizeuser,companyModule.updatecompanies);

router.delete("/delete/:id",auth.authorizeuser,companyModule.deletecompanies);

router.post("/create",auth.authorizeuser,companyModule.createcompanies);

module.exports=router;