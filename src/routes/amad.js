var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const app = require('express');

app.get('/getAmad', function (req, res) {
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

