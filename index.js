const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello");
});

const PORT = process.env.PORT | 5001;

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})