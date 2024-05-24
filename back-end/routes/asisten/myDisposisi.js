const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/asisten/myDisposisi')

router.get('/listSuratKeluar', middleware.verifyTokenAsisten, controllers.dataSuratKeluar)
router.post('/tambahMyDisposisi', middleware.verifyTokenAsisten, controllers.tambahDisposisi)
router.get('/tampilMyDisposisi', middleware.verifyTokenAsisten, controllers.tampilDisposisi)
router.post('/editMyDisposisi/:id_disposisi', middleware.verifyTokenAsisten, controllers.editDisposisi)
router.delete('/deleteMyDisposisi/:id_disposisi', middleware.verifyTokenAsisten, controllers.hapusDisposisi)

module.exports = router