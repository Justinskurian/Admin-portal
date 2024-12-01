const express=require("express");
const dotenv=require("dotenv");
require("dotenv").config();

const app=express();
require('./database/dataConnect');

const adminRoutes=require('./routes/adminroutes');
const mentorRoutes=require('./routes/mentorroutes');
app.use('/admin',adminRoutes);
app.use('/mentor',mentorRoutes);

app.listen(process.env.port,()=>{
    console.log(`listening to  port ${process.env.port}`);

})