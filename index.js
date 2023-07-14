const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const matchRoute = require("./routes/matchRoute");
const teamRoute = require("./routes/teamRoute");

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.use(bodyParser.json())
app.use('/matches',matchRoute);
app.use('/teams',teamRoute);

const PORT = process.env.PORT | 5001;

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})