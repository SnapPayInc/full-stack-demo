import express from 'express';
import * as dotenv from 'dotenv'

import {connect} from "./database/connection.js";

const app = express();
dotenv.config()
const PORT = process.env.PORT;

app.listen(PORT, async (error) =>{
    if(!error){
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
        await connect();
    }
    else
        console.log("Error occurred, server can't start", error);
    }
);