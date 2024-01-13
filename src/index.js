// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import connectDB from "./db/index.js";

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("Server error : ", err);
            throw err;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`\n Server running on PORT : ${process.env.PORT || 8000}`)

        })
    })
    .catch((err) => {
        console.log("MONGODB connection error : ", err);
        process.exit(1);
    })