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



app.post('/insertEmp',function(req,res){
	//read data from req body
	//if json - json(), normal data - urlencoded
    // console.log("req received");
 
	// var eid = req.body.empid;
	// var enm = req.body.ename;
	// var sal = req.body.sal;
	// var dno = req.body.deptno;

	// console.log(eid,":",enm,":",sal,":"+dno);
	// var query="insert into emp(empid,ename,deptno,salary) values(?,?,?,?)";
	// con.query(query, [eid,enm,dno,sal], function(err) {
	// 	if(!err)
	// 		res.send("success");
	// 	else
	// 		res.send("failure");
	// });
})







app.all('*',function(req,res) {
	res.send("Wrong URL");
});