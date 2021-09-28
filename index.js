const express = require("express")

const app = express();
const rootCall = (req,res) => res.send("Thank You")
app.get("/", (req,res) =>{
    res.send("Thank You for Calling Me")

})
app.listen(3000, () =>console.log("Listening to port 3000"))