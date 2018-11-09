const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.post('/login', userController.login)
router.post('/add_achieve', userController.addAchieve)

module.exports = router
