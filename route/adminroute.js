const { adminRegister, adminlogin } = require("../Controller/Authentication")

const adminroute = require("express").Router()

adminroute.post("/adminregister",adminRegister)

adminroute.post("/adminlogin",adminlogin)

module.exports = adminroute

