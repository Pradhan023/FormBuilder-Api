const { DataController, GetdataCont, AdminaddCont, deleteData, GetAdmindata } = require("../Controller/datacont")

const router = require("express").Router()

router.post('/adddata',DataController)
router.get('/getdata',GetdataCont)
router.delete('/deleteformdata',deleteData)
router.post('/addadmindata',AdminaddCont)
router.get('/getadmindata',GetAdmindata)

module.exports = router
