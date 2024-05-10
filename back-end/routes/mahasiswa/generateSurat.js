const express =require('express')
const router = express.Router()
const controllers = require('../../controllers/mahasiswa/generateSurat')
const middleware = require('../../middleware/authentication')

router.get('/allJenisSurat', middleware.verifyTokenMahasiswa, controllers.allJenisSurat)

module.exports = router