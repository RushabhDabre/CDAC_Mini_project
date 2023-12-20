

var exp=require("express")
var mysl=require("mysql2")
var cor=require("cors")
var bp=require("body-parser")

var con=mysl.createConnection({
    host:"localhost",
    password:"root",
    database:"dbs",
    user:"root"

});
con.connect(function(err){
    if(!err)
    {
        console.log("Db connected");
    }
    else{
        console.log("db not connected");
    }
})
var app=exp()
app.use(cor())
app.use(bp.json())
app.listen(9000,function(){
    console.log("exp-Rest-server-900-started")
})
app.get("/emps",function(req,res){
    console.log("req recesived")
    con.query("select*from emp",function(err,result){
        if(!err)
        {
            console.log(result.length);
            res.json(result);
        }
    })
    
});

app.post("/insertdata",function(req,res){
    
    var enm=req.body.NAME;
	var age =req.body.AGE;
	var sex=req.body.SEX;
	var mail=req.body.EMAILID;
	var phn=req.body.PHONENO;
  
    var query="insert into med(NAME,AGE,SEX,EMAILID,PHONENO)values(?,?,?,?,?)";
    console.log("req recesive post")
    con.query(query,[enm,age,sex,mail,phn],function(err){
        if(!err)
        res.send("SUCESS");
        else
        res.send("FAILURE"+err);
    })
});



app.all("*",function(req,res){
    res.send("<p>URL IS UNKNOW</P>");
});