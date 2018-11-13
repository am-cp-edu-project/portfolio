const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.post('/login', userController.login)
router.post('/add_achieve', userController.addAchieve)
router.post('/add_user', userController.addUser)

router.get('/qwerty', (req, res) => {

    res.send({LastName: req.user.LastName,FirstName: req.user.FirstName,Patronymic : req.user.Patronymic,Faculty:req.user.Faculty,Course:req.user.Course,AverageMark:req.user.AverageMark})

})

module.exports = router
