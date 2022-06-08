require('./utils/db');
require('dotenv').config();
const express = require('express');


const port = process.env.PORT || 1234;

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "It works"
    });
});

app.use("/api/user", require("./router/userRouter"))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});