// Backend server (Node.js with Express and MySQL)
var exp = require('express')
var mysql = require('mysql2');
var cors = require('cors');
var bp = require('body-parser');

// MySQL database connection
var con = mysql.createConnection({
  host:"localhost",
	user:"root",
	password:"root",
	database:"dbt"
});

// Middleware setup
var app = exp();
app.use(cors());
app.use(bp.json());

con.connect(function(err){
	if(!err)
        console.log("Connected to the database");
	else
        console.error("Database connection error:", err);
})

// Login endpoint
app.post("/userLogin", (req, res) => {
  var email = req.body.email;
	var password = req.body.password;

  // Check credentials in the database
  var query = "SELECT * FROM userAccount WHERE email = ? AND password = ?";
  con.query(query, [email, password], function(err, result){
    if (err) {
      console.error("Database query error:", err);
    } else if (result.length > 0) {
        console.log("Login successful");
        res.send("Login successful");
    } else {
        console.log("Invalid email or password");
        res.send("Invalid email or password");
    }
  });
});


// Register End API
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
        	res.send("User Already Exist!!");
          console.log("User Already Exist!!");
    });
});

app.put('/forgetPass', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var oldpassword = req.body.oldpassword;

  // Check if the old password matches
  var checkQuery = "SELECT * FROM userAccount WHERE email = ? AND password = ?";
  con.query(checkQuery, [email, oldpassword], function(checkErr, checkResult) {
      if (checkErr) {
          console.error("Database query error:", checkErr);
          res.send("Internal Server Error");
      } else if (checkResult.length > 0) {
          // Old password matches, update the password
          var updateQuery = "UPDATE userAccount SET password = ? WHERE email = ?";
          con.query(updateQuery, [password, email], function(updateErr, updateResult) {
              if (!updateErr) {
                  res.send("SUCCESS");
                  console.log("Password update successful");
              } else {
                  console.error("Database update error:", updateErr);
                  res.send("Internal Server Error");
              }
          });
      } else {
          // Old password doesn't match
          console.log("Old Password Doesn't match!!");
          res.send("Old Password Doesn't match!!");
      }
  });
});

app.all('*',function(req,res) {
	res.send("Wrong URL");
});

// Start the server
app.listen(9000, function(){
	console.log("exp - REST server - 9000");
})