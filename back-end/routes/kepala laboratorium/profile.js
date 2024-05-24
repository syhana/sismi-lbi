const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/kepala laboratorium/profile')

router.get('/detailAkunKalab', middleware.verifyTokenKalab, controllers.detailAkun)
router.post('/updateAkunKalab', middleware.verifyTokenKalab, controllers.uploadd, controllers.updateAkun)

module.exports = router