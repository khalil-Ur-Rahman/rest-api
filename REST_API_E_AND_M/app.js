const express= require('express');
const app=express();

// api
app.get('/express/api/v1/definition',(req, res)=>{
    res.send('Express.js, or simply Express, is a back end web application framework for Node.js')
})

app.listen(4300, function()  {
    console.log("simple app is running");
})