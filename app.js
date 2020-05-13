const data = require("./data")
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res)=>res.json(data));

app.get("/cat", (req, res)=>res.send(data.filter(animal=>animal.type =="cat")))

app.get("/dog", (req, res)=>res.send(data.filter(animal=>animal.type =="dog")))

app.get("/:id", (req, res)=>res.send(data.filter(a=>a.id == req.params.id)))

app.get("/", (req, res)=> {
  let age = req.query.age;
  let color = req.query.color;
  let a = [];
  if(age) {
    a = data.filter(an=>an.age == age);
  }
  if(color) {
    a = a.filter(an=>an.color == color);
  }

  res.json(a)
})
app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`));