var exp = require('express');
var mysql = require('mysql2');
var cors= require('cors');
var bp=require('body-parser');

var app=exp();
app.use(cors());
app.use(bp.json());

app.listen(9000,function(req,res){
    console.log("Server connected");
})

var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dbt"
});

con.connect(function(err){
    if(!err)
    {
        console.log("connected");
    }
})

app.put('/lc',function(req,res){
    // var username=req.body.username;
    var password=req.body.password;
    var query = "UPDATE login SET password = ? WHERE username = 'Harshal'";
    con.query(query,[password],function(err, result){
        if(!err)
        {
            console.log("Successful");
        }

        else
        {
            console.log("Unsuccessful");
        }
    })
})