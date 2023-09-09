import app from "./web-server/server.js";
const Port=3000;
app.listen(Port,
    ()=>{
        console.log(`Server is ready to accept requests`)
    })