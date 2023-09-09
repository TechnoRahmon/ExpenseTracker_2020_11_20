const mongoose = require('mongoose')

const connectDB = async ()=>{
        try{
            const conn = await mongoose.connect(process.env.MONGO_URI,{
                useCreateIndex:true,
                useUnifiedTopology:true,
                useNewUrlParser:true, 
                useFindAndModify:false,
            })
            console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
        }
        catch(er){
            console.log(`Check you MongoDB connection string, Error: ${er.message}`.red);
            process.exit(1);
        }
}

module.exports =  connectDB; 