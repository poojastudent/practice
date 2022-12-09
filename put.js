const rp = require("request-promise");
const express = require("express");
const app = express();
const body_parser = require("body-parser");
const fs = require("fs");
const port = 4000;
app.use(body_parser.json());
async function main() {
    try {
        rp({
            url: 'http://localhost4000',
            json: true,
            method: 'put',
            body: [
                {
                    address: "gurugram",
                    id: 443243
                }
            ]
        })
        app.listen(port, () => {
            console.log("server listening on " + port);
        });
        app.put('/', (req, res) => {
            var read = fs.readFileSync("data.json");
            read = JSON.parse(read);
            var flag = false;
            for (val of read) {
                if (val.name == req.body[0].id) {
                    flag = true;
                }
            }
            if (flag == true) {
                console.log("data already exists");
            } else {
                read.push(req.body[0]);
            }
            fs.writeFileSync("data.json", JSON.stringify(r));
        });
    } catch (err) {
        console.log(err.message);
    }

}
main()
