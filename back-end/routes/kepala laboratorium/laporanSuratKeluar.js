const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/kepala laboratorium/laporanSuratKeluar')

router.post('/laporanKeluar', middleware.verifyTokenKalab, controllers.generateLaporanKeluar)

module.exports = router