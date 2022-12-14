const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getcompanies=async(req,res,next)=>{
    try{
        const getcompanies= await mongo.selectedDb
        .collection("companies")
        .find().toArray();
        res.send(getcompanies);
    }catch(err){
        res.status(500).send(getcompanies);

    }
  
};

module.exports.updatecompanies=async(req,res,next)=>{
  try{
    const id=req.params.employeeid;
  const updatedresponce=await mongo.selectedDb
  .collection("companies")
  .findOneAndUpdate({_id:ObjectId(id)},
  {$set:{...req.body}},
 { returnDocument:"after"});
  res.send(updatedresponce);
}
  catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.createcompanies=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("companies")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deletecompanies=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("companies")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};