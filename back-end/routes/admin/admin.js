const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/admin')


router.post('/tambahAdmin', controllers.tambahAdmin)
router.post('/loginAdmin', controllers.loginAdmin)
router.delete('/logoutAdmin', middleware.verifyTokenAdmin, controllers.logoutAdmin)

module.exports = router