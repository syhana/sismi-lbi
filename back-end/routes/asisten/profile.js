const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/asisten/profile')

router.get('/detailAkunAsisten', middleware.verifyTokenAsisten, controllers.detailAkun)
router.post('/editAkunAsisten', middleware.verifyTokenAsisten, controllers.uploadd, controllers.updateAkun)
router.get('/detailAkunKordas', middleware.verifyTokenKordas, controllers.detailAkun)
router.post('/editAkunKordas', middleware.verifyTokenKordas, controllers.uploadd, controllers.updateAkun)

module.exports = router