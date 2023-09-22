const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;

//If not needed in JSON file format
// app.get('/api/contacts', (req, res) => {
//     res.send("Get all contacts")
// })

app.get('/api/contacts', (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});