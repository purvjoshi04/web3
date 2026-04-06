import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "It Worked"
    })
})

app.listen(process.env.PORT);