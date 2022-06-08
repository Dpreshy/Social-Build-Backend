require('./utils/db');
require('dotenv').config();
const express = require('express');


const port = 1234;

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.status("success").json({
        message: "It works"
    });
});

app.use("/api/user", require("./router/userRouter"))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});