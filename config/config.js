const mongo = require('mongoose')

const connection = async()=>{
    try{
        await mongo.connect(process.env.Mongo_Url);
        console.log("Mongodb Connect");
    }
    catch(err){
        console.log("Mongodb error " ,err);
    }
}
module.exports = connection