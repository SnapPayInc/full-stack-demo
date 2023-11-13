import express from 'express';
import 'dotenv/config';
import log from 'npmlog';

// Import the custom modules
import { connect } from './database/connection.js';
import todoRoute from './routes/todoRoute.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// Use the middleware for handling routes
app.use('/todo', todoRoute);

// Start the Express application and listen on the specified port
//@ts-ignore
app.listen(PORT, async (error) => {
  if (!error) {
    log.info('Server', 'Server is Successfully Running, and App is listening on port ' + PORT);
    await connect();
  } else {
    log.error('Server', "Error occurred, server can't start", error);
  }
});
