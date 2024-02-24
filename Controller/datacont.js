const { DataModal, AdminDataModal } = require("../modal/datamodal")

const DataController = async(req,res)=>{
    const data = req.body;
    await DataModal.create(data)
    res.send(data)
    console.log(data);
}

const GetdataCont = async(req,res)=>{
    const data = await DataModal.find({})
    res.send(data)
}

const deleteData = async(req,res)=>{
    await DataModal.deleteMany({})
    res.send("Data Deleted")
}

const AdminaddCont = async (req,res)=>{
    const data = req.body
    console.log(data);
    const dd = await AdminDataModal.create(data)
    console.log(dd);
    res.send(dd)
}

const GetAdmindata = async(req,res)=>{
    const data = await AdminDataModal.find({})
    res.send(data)
}

module.exports = {DataController,GetdataCont,AdminaddCont,deleteData,GetAdmindata}