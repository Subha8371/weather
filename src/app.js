const express = require('express');
const path=require("path");
const hbs=require('hbs');
const app = express();

const port= 8000 ;

console.log(__dirname);
// public static path
const staticPath = path.join(__dirname, '../public');
const template_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials');
console.log(staticPath)

app.set('view engine', 'hbs');       //here we set hbs as view enginee 
app.set('views', template_path);     //here we set template path as views
hbs.registerPartials(partials_path);  //to register partial path at first 

app.use(express.static(staticPath));


//routing
app.get("/",(req, res)=>{
    res.render("index");
})

app.get("/about",(req, res)=>{
    res.render("about");
})

app.get("/weather",(req, res)=>{
    res.render("weather")
})

app.get("*",(req, res)=>{
    res.render("404error")
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})