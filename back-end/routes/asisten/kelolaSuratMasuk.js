const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/asisten/kelolaSuratMasuk')

router.post('/tambahSuratMasuk', middleware.verifyTokenAsisten, controllers.uploadd, controllers.tambahSuratMasuk)
router.get('/tampilSuratMasuk', middleware.verifyTokenAsisten, controllers.tampilSuratMasuk)
router.post('/editSuratMasuk/:no_surat_masuk', middleware.verifyTokenAsisten, controllers.uploadd, controllers.editSurat)
router.delete('/deleteSuratMasuk/:no_surat_masuk', middleware.verifyTokenAsisten, controllers.hapusSurat)
router.get('/detailSuratMasuk/:no_surat_masuk', middleware.verifyTokenAsisten, controllers.detailSurat)

module.exports = router