const express = require("express");
const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})