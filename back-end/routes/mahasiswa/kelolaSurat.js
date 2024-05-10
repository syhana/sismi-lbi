const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/mahasiswa/kelolaSurat')

router.post('/tambahSurat', middleware.verifyTokenMahasiswa, controllers.uploadd, controllers.tambahSurat)
router.post('/editSurat/:id_surat_mahasiswa', middleware.verifyTokenMahasiswa, controllers.uploadd, controllers.editSurat)
router.get('/semuaSurat', middleware.verifyTokenMahasiswa, controllers.semuaDataSurat)
router.delete('/hapusSurat/:id_surat_mahasiswa', middleware.verifyTokenMahasiswa, controllers.hapusSurat)
router.get('/detailSurat/:id_surat_mahasiswa', middleware.verifyTokenMahasiswa, controllers.detailSurat)

module.exports = router
