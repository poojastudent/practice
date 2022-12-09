const express = require('express');
const app = express();
const port = 2000;
app.get('/', (req, res) => {
    res.send("data for reading")
})
app.listen(port, () => {
    console.log('listening on port http://localhost2000')
})