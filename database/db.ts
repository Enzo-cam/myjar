import mongoose from "mongoose";

/**
 * 0 disconennected
 * 1 connected
 * 2 connecting
 * 3 disconnecting
 */

const mongoConnection = {
    isConnected: 0
}

export const connect = async() =>{
    if(mongoConnection.isConnected){
        console.log("Estamos conectados")
        return;
    }

    if(mongoose.connections.length > 0){
        //Tomando conexion
        mongoConnection.isConnected = mongoose.connections[0].readyState
    
        if(mongoConnection.isConnected === 1){
            console.log("Usando conexion anterior")
            return;
        }

        //Si le estado no es el 1, nos desconectamos para evitar multiples conexiones
        await mongoose.disconnect()
    }

    await mongoose.connect("")
    mongoConnection.isConnected = 1 
    console.log('Conectado a mongo DB')
}

export const disconnect = async() => {
    await mongoose.disconnect()
    console.log('Desconectado de MongoDB')
}