const mongoose=require("mongoose");
module.exports=()=>{

     return mongoose.connect("mongodb+srv://Gourav:g0MM510n5oTi5Ruo@cluster0.myneump.mongodb.net/Cluster0?retryWrites=true&w=majority")
}



