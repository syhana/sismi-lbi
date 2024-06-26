const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/asisten/kelolaSuratKeluar')

router.post('/tambahSuratKeluar', middleware.verifyTokenAsisten, controllers.uploadd, controllers.tambahSurat
)
router.get('/tampilSuratKeluar', middleware.verifyTokenAsisten, controllers.tampilSurat)
router.post('/editSuratKeluar/:no_surat_keluar', middleware.verifyTokenAsisten, controllers.uploadd, controllers.editSurat)
router.delete('/hapusSuratKeluar/:no_surat_keluar', middleware.verifyTokenAsisten, controllers.hapusSurat)
router.get('/detailSuratKeluar/:no_surat_keluar', middleware.verifyTokenAsisten, controllers.detailSurat)

module.exports = router