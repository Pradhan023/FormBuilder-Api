const { DataModal, AdminDataModal } = require("../modal/datamodal")

const DataController = async(req,res)=>{
    const id = req.user.id;
    const data = req.body;
    const obj = {...data,dataId:id}
    const dd = await DataModal.create(obj)
    res.send(dd)
    // console.log(obj);
}

const GetdataCont = async(req,res)=>{
    const id = req.user.id;
    const data = await DataModal.find({dataId:id})
    res.send(data)
    // console.log(data);
}

const deleteData = async(req,res)=>{
    await DataModal.deleteMany({dataId:req.user.id})
    res.send("Data Deleted")
}

const AdminaddCont = async (req,res)=>{
    const data = req.body
    // console.log(data);
    const obj = {...data,dataId:req.user.id}
    const dd = await AdminDataModal.create(obj)
    // console.log(dd);
    res.send(dd)
}

const GetAdmindata = async(req,res)=>{
    const data = await AdminDataModal.find({dataId:req.user.id})
    // console.log(data);
    res.send(data)
}

const DeleteOne = async(req,res)=>{
    const data = req.body;
    await AdminDataModal.findByIdAndDelete({_id:data.id})
    res.send("deleted")
    // console.log(data.id);
}

module.exports = {DataController,GetdataCont,AdminaddCont,deleteData,GetAdmindata,DeleteOne}