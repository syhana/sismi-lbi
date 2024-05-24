const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/kepala laboratorium/laporanSuratMasuk')

router.post('/laporanMasuk', middleware.verifyTokenKalab, controllers.generateLaporanMasuk)

module.exports = router