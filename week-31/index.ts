import express from "express";
import { middleware } from "./middleware";

const app = express();
app.use(middleware)

app.get("/cpu", (req, res) => {
    for (let i = 0; i < 1000000; i++) {
        Math.random();
    }

    res.json({
        message: "cpu"
    })
});

app.get("/users", (req, res) => {

    res.json({
        message: "user"
    });
});

app.get("/metrics", (req, res) => {

    
});


app.listen(5001);