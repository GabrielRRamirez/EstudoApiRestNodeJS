import mongoose from "mongoose";

export async function connectDb() {
    let url = "mongodb://mongodb:27017/livraria";
    
    try{
        await mongoose.connect(url);
        mongoose.connection.once("open", () => console.log("Conectado ao banco de dados!"));
    }catch(error) {
        console.log(`erro ao conectar ao banco de dados: \n ${error}`);
        process.exit();
    }
}