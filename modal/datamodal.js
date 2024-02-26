const mongo = require('mongoose')

const AddData = mongo.Schema({
    dataId:{
        type:String
    },
    Dataform:{
        type:Object
    }
})

const AdminData = mongo.Schema({
    dataId:{
        type:String
    },
    Objdata:{
        type:Object,
        required:false
    }
})

const DataModal = mongo.model("Formdata",AddData)
const AdminDataModal = mongo.model("Admindata",AdminData)

module.exports = {DataModal,AdminDataModal}