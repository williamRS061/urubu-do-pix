import express from "express";
import { database } from "./database/db-fake.js";
import User from "./entities/User.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ message: "It works!" });
});

app.get("/users", (req, res) => {
    const users = database.find();
    
    return res.json({ data: users });
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const user = database.findOne(id);

    return res.json({ data: user });
});

app.post("/user", (req, res) => {
    const { name, cpf } = req.body;
    const user = new User(undefined, name, cpf);

    database.create(user);

    return res.status(201).send("User created!");
});


app.listen(3333, () => {
    console.log("server listen on port 3333...")
});

