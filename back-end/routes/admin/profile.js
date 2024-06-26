const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/profile')
const middleware = require('../../middleware/authentication')
const controllersMhs = require('../../controllers/mahasiswa/mahasiswa')

router.get('/detailAkunAdmin', middleware.verifyTokenAdmin, controllers.detailAkun)
router.post('/updateAdmin', middleware.verifyTokenAdmin, controllers.updateAkun)

module.exports = router