const mongoose = require("mongoose")

function dbConnection() {
    mongoose.connect("mongodb://localhost/native");
    mongoose.connection.once('open', function() {
        console.log("connected to db");
    }).on('error', (err) => {
        console.log(err);
    })
}
dbConnection();