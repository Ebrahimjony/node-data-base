const express= require('express');
const app=express(app);
const port= process.env.PORT||5000;

app.get('/',(req,res=>{
    res.send('Hellow Would');
}))
app.listen(port,()=>{
    console.log('listening to port',port);
})