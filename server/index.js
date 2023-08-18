const tasks = require("./routes/task")
const connection = require("./db");
const express = require("express");
const cors = require("cors");
const app =express;

connection();

app.use(express.json());
app.use(cors());
app.use("/api/tasks",tasks)

const port = process.env.PORT || 8080 ;
app.listion(port,()=> console.log(`server listining on port ${port}...`));
