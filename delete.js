const rp = require("request-promise");
const express = require("express");
const app = express();
const body_parser = require("body-parser");
const fs = require("fs");
const port = 9000;
app.use(body_parser.json());

async function main() {
    rp({
        uri: "http://localhost:9000",
        method: "put",
        json: true,
        body: [
            {
                name: "pihu",
                rollno: 2,
            },
        ],
    });
    app.listen(port, () => {
        console.log("server listening on " + port);
    });

    app.post("/", (req, res) => {
        var d = req.body;
        fs.writeFileSync("data.json", JSON.stringify(d));
        res.send("data.json");
        console.log("data");
    });

    app.get("/", (req, res) => {
        var data = fs.readFileSync("data.json", "utf-8");
        res.send(data);
    });

    app.put("/", (req, res) => {
        var r = fs.readFileSync("data.json");
        r = JSON.parse(r);
        var flag = false;
        for (val of r) {
            if (val.name == req.body[0].name) {
                flag = true;
            }
        }
        if (flag == true) {
            console.log("data already exists");
        } else {
            r.push(req.body[0]);
        }
        fs.writeFileSync("data.json", JSON.stringify(r));
    });
}
// main();
try {
    app.listen(port, () => {
        console.log("server listening on " + `http://localhost${port}`);
    });
    app.delete('/', function (req, res) {
        res.send('Got a DELETE request at /')
    })

}
catch (err) {
    console.log("Error: " + err.message);
}
