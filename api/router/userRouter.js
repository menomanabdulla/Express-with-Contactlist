const router = require('express').Router()
const userController = require('../controller/userController')

//user route
router.post('/signup',userController.signUpUser)
router.post('/signin',userController.signInUser)
router.get('/signin',userController.user)
router.patch('/update',userController.upadateUser)
router.get('/fovourite',userController.faveList)
router.patch('/fovourite-update',userController.faveListUpdate)
router.delete('/fovourite-delete',userController.faveListDelete)

module.exports = router