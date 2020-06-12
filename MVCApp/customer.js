const express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://vtrshu:Vtrshukun1@cluster1-4jh5j.mongodb.net/test';


router.get('/',async (req,res)=>{
    let client= await MongoClient.connect(url);
    let dbo = client.db("mydb");
   
    let results = await dbo.collection("customers").find({}).toArray();
    res.render('allCustomer',{customers:results});
})

router.get('/insert',(req,res)=>{
    res.render('insertCustomer');
})

router.get('/delete',async (req,res)=>{
    let id = req.query.id;
    var ObjectID = require('mongodb').ObjectID;
    let condition = {"_id" : ObjectID(id)};
    let client= await MongoClient.connect(url);
    let dbo = client.db("mydb");
    await dbo.collection("customers").deleteOne(condition);
    //
    let results = await dbo.collection("customers").find({}).toArray();
    res.render('allCustomer',{customers:results});
})

router.post('/doInsert',async (req,res)=>{
    let client= await MongoClient.connect(url);
    let dbo = client.db("mydb");
    let nameValue = req.body.txtName;
    let addressValue = req.body.txtAddress;
    let newCustomer = {name : nameValue, address:addressValue};
    await dbo.collection("customers").insertOne(newCustomer);
   
    let results = await dbo.collection("customers").find({}).toArray();
    res.render('allCustomer',{customers:results});
})

module.exports = router;