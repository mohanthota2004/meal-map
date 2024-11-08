const mongoose = require('mongoose');
const express = require("express");
const app = express();
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://saiven05575:Venkatesh5575@cluster0.zki4n.mongodb.net/DATASET?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database");
        app.listen(3333, () => {
            console.log("Server is running on port 3333");
        });
    })
    .catch(err => {
        console.error("Database not connected: " + err.message);
        process.exit(1); // Exit process if the database connection fails
    });
};
module.exports = connectDB;


