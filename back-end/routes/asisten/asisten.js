const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/asisten/asisten')

router.post('/loginAsisten', controllers.loginAsiten)
router.delete('/logoutAsisten', middleware.verifyTokenAsisten, controllers.logoutAsisten)
router.delete('/logoutKordas', middleware.verifyTokenKordas, controllers.logoutAsisten)

module.exports = router