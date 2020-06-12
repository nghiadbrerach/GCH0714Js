const express = require('express');
const engines = require('consolidate');
const app = express();

//npm i handlebars consolidate --save

app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {

    res.render('index',{name:"Dai Weebo", email:"daiweebgod@weebmail.com"});
});
app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('./dologin',(req,res)=>{
let inpname=req.body.txtName;
let inpemail=req.body.txtEmail;
res.render("index",{name:inpname,email:inpemail})
})
var server = app.listen(5000, function () {

    console.log('Node server is running..');

});