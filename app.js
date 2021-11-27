const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json())
const PORT = 5000;

app.get("/",(req,res) => {
    res.send("Hey there")
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})