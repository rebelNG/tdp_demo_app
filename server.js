let Express = require("express")
let server = Express()
let bodyParser = require('body-parser')
// let MySql = require("mysql")

server.set("view engine", "ejs")
server.use(bodyParser.urlencoded({ extended: false }))

// let db = MySql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"root",
//     database: "nbs2"
// })
// db.connect()

let initialCard = []
server.get("/", (req,res)=>{
    res.render("index.ejs",{initialCard})
    res.end()
})

server.post("/home", (req,res)=>{
    let input0 = req.body.txt0
    let input1 = req.body.txt1
    let input2 = req.body.txt2
    let input3 = req.body.txt3

    let newcard = {
        title: `${input0}`,
        content: `${input1}\n${input2}\n${input3}`,
        imageSrc:"#"
    }
    initialCard.push(newcard)

    res.redirect("/");
})

server.get("/createpost", (req,res)=>{
    res.render("createpost.ejs")
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server is running...');
})