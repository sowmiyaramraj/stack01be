const mongo = require("../connect");
const {ObjectId}= require("mongodb");

module.exports.getuser=async(req,res,next)=>{
    try{
        const getuser= await mongo.selectedDb
        .collection("user")
        .find().toArray();
        res.send(getuser);
    }catch(err){
        res.status(500).send(getuser);

    }
  
};

module.exports.updateuser=async(req,res,next)=>{
  try{
    const id=req.params.userid;
  const updatedresponce=await mongo.selectedDb
  .collection("user")
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

module.exports.createuser=async(req,res,next)=>{
   try{
   const insertedresponse=await mongo.selectedDb
   .collection("user")
   .insertOne(req.body);
   res.send(insertedresponse);
   }
   catch(err){
    console.error(err);
    res.status(500).send(err);
   }
};

module.exports.deleteuser=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedresponce=await mongo.selectedDb
        .collection("user")
        .remove({_id:ObjectId(id)});
        res.send(deletedresponce);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
       }
};