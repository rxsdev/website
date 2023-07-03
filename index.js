const express = require ("express")
const path = require ("path")
const app = express()
const port = 8080
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))
let name = "rXs69";
app.get("/",(req, res)=>{
    res.render("home",{name : name})
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
