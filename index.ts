import express from 'express';
import * as dotenv from 'dotenv'

// Import the custom modules
import {connect} from "./database/connection.js";
import todoRoute from "./routes/todoRoute.js";

const app = express();
const PORT = process.env.PORT;
dotenv.config()

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// Use the middleware for handling routes
app.use('/todo',todoRoute);

// Start the Express application and listen on the specified port
//@ts-ignore
app.listen(PORT, async (error) =>{
        if(!error){
            console.log("Server is Successfully Running, and App is listening on port "+ PORT);
            await connect();
        }
        else
            console.log("Error occurred, server can't start", error);
    }
);