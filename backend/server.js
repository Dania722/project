const app = require("./app");
const dotenv = require ("dotenv");
const connectDatabase = require("./db/Database.js");


//Unhandle promise rejection 

process.on("unhandleRejection" , (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to unhandle uncaught rejection`);
});

// config 
dotenv.config({
    path:"backend/config/.env"
})

//connect database 
connectDatabase();

//create server 
const server = app.listen (process.env.PORT , () => {
    console.log (`server is working on http://localhost:${process.env.PORT}`)
})


//Unhandle promise rejection 

process.on("unhandleRejection" , (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to unhandle promise rejection`);
    server.close(()=>{
        process.exit(1)
    });
});


