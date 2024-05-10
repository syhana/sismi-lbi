const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/mahasiswa/disposisi')

router.get('/dataDisposisiMhs', middleware.verifyTokenMahasiswa, controllers.dataDisposisi )
router.get('/dataSuratListMhs', middleware.verifyTokenMahasiswa, controllers.dataSuratMhs)
router.post('/tambahDisposisiMhs', middleware.verifyTokenMahasiswa, controllers.tambahDisposisi)
router.post('/editDisposisiMhs/:id_disposisi', middleware.verifyTokenMahasiswa, controllers.editDisposisi)
router.delete('/hapusDisposisiMhs/:id_disposisi', middleware.verifyTokenMahasiswa, controllers.hapusDiposisi)

module.exports = router