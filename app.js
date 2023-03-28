import {startServer} from './src/server/server.js';
import {connectDb} from './src/config/dbConnect.js';

console.log("connecting to database...")
await connectDb();

console.log("initializing server...")
startServer();

 