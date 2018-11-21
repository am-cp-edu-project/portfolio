const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const adminController = require('../controllers/adminController.js')

router.post('/login', userController.login)
router.post('/add_achieve', userController.addAchieve)
router.post('/add_user', userController.addUser)

router.post('/AchSuccess', adminController.AchSuccess)
router.post('/AchFailed', adminController.AchFailed)

router.get('/qwerty', userController.dynamic)

router.get('/checked', adminController.Checked)

router.get('/zxcvbn', adminController.dynamic)

router.get('/getRating', adminController.getRating)

router.get('/user=*', adminController.allUsers)

module.exports = router
