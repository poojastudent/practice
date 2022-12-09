
const rp = require("request-promise");
const express = require("express");
const app = express();
const body_parser = require("body-parser");
const fs = require("fs");
const { readFile } = require("fs/promises");
const port = 3000;
app.use(body_parser.json());
async function main() {
    rp({
        url: 'http://localhost3000',
        json: true,
        method: 'get',

    })
    app.listen(port, () => {
        console.log("server listening on " + port);
    });
    app.get('/', (req, res) => {
        var data = fs.readFileSync("data.json", 'utf-8')
        res.send(data);
    })
}