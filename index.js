import express from "express"

// abrir puerto ochenta
const server = express();

// puerto a escuchar
const PORT = 8000;

server.get("/", (req, res) => {
    const query = req.query;
    if(query.name){
        res.send("hola " + query.name);
    }else{
        res.sendFile(__dirname + "/index.html");
    }
});

server.listen(PORT, () => {
    console.log("Listening on http:localhost:" + PORT);
})

// app que se conecte con TCP

// and otherwise logic etc


