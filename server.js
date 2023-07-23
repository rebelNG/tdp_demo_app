let Express = require("express")
let server = Express()
// let MySql = require("mysql")

server.set("view engine", "ejs")

// let db = MySql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"root",
//     database: "nbs2"
// })
// db.connect()

server.get("/", (req,res)=>{
    res.render("index.ejs")
    res.end()
})

server.get("/createpost", (req,res)=>{
    res.render("createpost.ejs")
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server is running...');
})