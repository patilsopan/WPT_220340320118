
const express = require('express');
const app = express();
app.use(express.static('static'));

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'sopan',
	port:3306
});

app.get("/adddetails",(req,resp)=>{
	let bookid = req.query.bookid;
	let bookname = req.query.bookname;
	let price = req.query.price;
	let output={status:false}
	connection.query("insert into book values(?,?,?)",[bookid,bookname,price],(err,result)=>{
		if(err){
			console.log("Details not added");
		}
		else{
			console.log(result);
			output.status=true;
		}
		resp.send(output);
	});
});

app.get("/viewall",(req,resp) => {
	let output ={status:false};
	connection.query("select * from book",[],(err,result)=>{
		if(err){
			console.log("error Occured book details not found");
		}
		else{
			console.log(result);
			output.status=true;
		}
		resp.send(result);
	});
});


app.listen(8081, function () {
    console.log("server listening at port 8081...");
});