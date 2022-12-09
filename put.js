var express = require('express');
var app = express();
var PORT = 3000;

app.put('/', (req, res) => {
    res.send("PUT Request Called")
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", `http//:localhost${PORT}`);
});
