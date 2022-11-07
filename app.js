const express=require("express");
const bodyParser=require("body-parser");
const routerRestaurant=require("./routes/routersRestaurant");
const routerLocation=require("./routes/routersLocation");
const mongoose=require("mongoose");


const PORT=process.env.PORT||9090;
const URI='mongodb://localhost:27017/udit';


const app=express();


mongoose.connect(URI,()=>{console.log("mongoDB connected")},(error)=>{console.log(error)});


app.use(bodyParser.json());
app.use('/Restaurants',routerRestaurant);
app.use('/location',routerLocation);


app.listen(PORT,()=> {console.log("server started listening")});