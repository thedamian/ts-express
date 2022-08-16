import express, { Request, Response } from "express";
const app = express();
app.use(express.json())
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/",(req: Request, res:Response) => {
    res.status(200).send("Hello world")
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );