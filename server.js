const express = require("express")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const fs = require("fs")
const bcrypt = require("bcryptjs")
const port = 4000
const app = express()
app.use(express.json())


const storage = multer.diskStorage({
    destination: "./Uploaded Images/",
    filename: function (req, file, cb) {
        try {
            cb(null, file.originalname)

        } catch (error) {
            console.log(error);

        }
    }
})
const uploads = multer({
    storage
})

app.post("/upload", uploads.single("image"), (req, res) => {
    res.send(req.file)
})

app.listen(port, () => {
    console.log(`server is running on:http://localhost:${port}`);

})