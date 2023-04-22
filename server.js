const express = require('express');
const bodyParser= require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/',(req,res)=>{
    const num1= Number(req.body.num1);
    const num2= Number(req.body.num2);
    const sum= num1+num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    console.log(`Result from post is ${sum}`);
})

app.listen(3000,()=>{
    console.log('Calculator is Running at Port 3000');
})