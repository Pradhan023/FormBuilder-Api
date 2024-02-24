const mongo = require('mongoose')

const AddData = mongo.Schema({
    type:{
        type:String || Number,
    },
    label:{
        type:String,
        required:false
    },
    checklabel:{
        type:String,
        required:false
    },
    check1:{
        type:String,
        required:false
    },
    check2:{
        type:String,
        required:false
    },
    selectlabel:{
        type:String,
        required:false
    },
    options:
    {
        type:Array,
        required:false
    }
})

const AdminData = mongo.Schema({
    Objdata:{
        type:Object,
        required:false
    }
})

const DataModal = mongo.model("Formdata",AddData)
const AdminDataModal = mongo.model("Admindata",AdminData)

module.exports = {DataModal,AdminDataModal}