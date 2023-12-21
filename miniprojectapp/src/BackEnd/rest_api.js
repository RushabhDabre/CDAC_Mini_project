var exp = require('express')
var mysql = require('mysql2');
var cors = require('cors');
var bp = require('body-parser');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"dbt"
});

var app = exp();
app.use(cors());
app.use(bp.json());

con.connect(function(err){
	if(!err)
		console.log("connected");
	else
		console.log("con failed");
})

app.listen(9000, function(){
	console.log("exp - REST server - 9000");
})

app.post('/insertUser',function(req,res){
	var name = req.body.name;
	var age = req.body.age;
	var gender = req.body.gender;
	var email = req.body.email;
	var phone = req.body.phone;
	var password = req.body.password;

	var query="insert into userAccount(name,age,gender,email,phone,password)values(?,?,?,?,?,?)";
	con.query(query,[name,age,gender,email,phone,password],function(err){
        if(!err)
        	res.send("Registration successful");
        else
        	res.send("Registration failed"+err);
    });
});

//not working but success in postman
app.put('/forgetPass',function(req,res){
	var email = req.body.email;
    var password = req.body.password;
    var query = "update userAccount set password = ? where email = ?";
    con.query(query,[password, email],function(err, result){
        if(!err){
        	res.send("SUCESS");
		}else{
        	res.send("FAILURE"+err);
		}
    })

})

app.all('*',function(req,res) {
	res.send("Wrong URL");
});