const express = require('express');
const { authController, getUserProfile, registerUser, updateUserProfile } = require('../controllers/usersControllers')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

//user registration
router.route('/').post(registerUser)


//post email and password.
router.post('/login', authController)


// get user profile Privae route
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = router;
