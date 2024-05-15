const express =require('express')
const router = express.Router()
const controllers = require('../../controllers/mahasiswa/generateSurat')
const middleware = require('../../middleware/authentication')

router.get('/allJenisSurat', middleware.verifyTokenMahasiswa, controllers.allJenisSurat)
router.post('/tambahJenisSurat', middleware.verifyTokenMahasiswa, controllers.tambahSurat)
router.post('/generateSurat/:id_jenis', controllers.generateSurat)
router.get('/dataBarangMhs', middleware.verifyTokenMahasiswa, controllers.allBarang)

module.exports = router