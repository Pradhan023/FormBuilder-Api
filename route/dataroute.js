const { DataController, GetdataCont, AdminaddCont, deleteData, GetAdmindata, DeleteOne } = require("../Controller/datacont")
const auth = require("../middleware/auth")

const router = require("express").Router()

router.post('/adddata',auth,DataController)
router.get('/getdata',auth,GetdataCont)
router.delete('/deleteformdata',auth,deleteData)
router.post('/addadmindata',auth,AdminaddCont)
router.get('/getadmindata',auth,GetAdmindata)
router.post('/admindeletefield',auth,DeleteOne)
module.exports = router
