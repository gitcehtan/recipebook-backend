const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URI;

mongoose.connect(URI)
        .then(() => {
            console.log("DATABASE Connected ");
        }).catch((err)=>{
            console.log(err);
        });

