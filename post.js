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
        method: "post",
        json: true,
        body: [
            {
                name: "pihu",
                rollno: 2,
            },
        ],
    });
    app.listen(port, () => {
        console.log("server listening on " + `http://localhost:9000`);
    });

    app.post("/", (req, res) => {
        var d = req.body;
        fs.writeFileSync("data.json", JSON.stringify(d));
        res.send("data.json");
        console.log("data");
    });
}
main();