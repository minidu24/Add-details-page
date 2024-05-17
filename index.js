const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const registerRoutes = require("./routes/registerroutes");
const petdetailsRoutes = require("./routes/petdetailsroutes");

const app=express()

app.use(cors())
app.use(express.json())
app.use("/", registerRoutes);
app.use("/", petdetailsRoutes);

const PORT=process.env.PORT||8020








mongoose.connect("mongodb+srv://Dhanuka:20020502@mernapp.emyz11d.mongodb.net/?retryWrites=true&w=majority&appName=MERNApp")
.then(()=>{
  
    console.log(`port number => ${PORT}`)
    app.listen(PORT,()=>console.log("server connection successful"))
}).catch((err)=>{
    console.log(err)
})

