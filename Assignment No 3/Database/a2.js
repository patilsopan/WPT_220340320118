const express =require('express');
const app=express();

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'sopan',
    port:3306
});

connection.query("insert into item values(?,?,?,?) ",[5,"siddhesh",96,"topper5"],(error,res)=>{
    if(error){
        console.log("Error...............");
    }
    else{
        console.log(res);
    }
});
