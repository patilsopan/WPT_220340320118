let express=require("express");
let app=express();


app.get('/additem',(req,resp)=>{
    resp.send("add item needs to be done");

});
app.get('/updateitem',(res,resp)=>{
    resp.send("update items need to be done");
});

app.listen(900,()=>{
    console.log("Express is running");
});
app.use(express.static("cp"));
