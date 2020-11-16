import express from "express"
import { PrismaClient } from '@prisma/client'
// or const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// abrir puerto ochenta
const server = express();

// puerto a escuchar
const PORT = 8000;

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/create-user.html");
})

server.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    console.log(users);
    res.send(JSON.stringify(users));
})

server.get("/users/add-to-database", async (req, res) => {
    const query = req.query;
    console.log("New user: " + query.name + " " + query.age);
    await prisma.user.create({
        data: {
            name: query.name,
            age: Number(query.age)
        }
    })

    res.redirect("/users");

});

server.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
})



// app que se conecte con TCP

// and otherwise logic etc


