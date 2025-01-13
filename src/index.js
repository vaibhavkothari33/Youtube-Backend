// require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app} from "./app.js"

dotenv.config({
    path: "./env"
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at http://localhost${process.env.PORT}`);
    })
    // app.on("error",(error)=>{
    //     console.log("Error",error);
    //     throw error;
    // })
})
.catch((error)=>{
    console.log("Mongo DB connection failed !!! check for the error",error);
})










// ; (async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }
//     catch (error) {
//         console.error("Error", error);
//         throw err

//     }
// })()