var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const express = require('express');
const app = express();
const port = 8080;

app.get('/getAmad1', function (req, res) {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("CS_DEV");
        dbo.collection("amad").find({}).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});
app.listen(port, () => {
    console.log(`app is listing at http://localhost:${port}`);
});

