const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/mahasiswa/profile')

router.get('/detailAkunMhs', middleware.verifyTokenMahasiswa, controllers.detailAkun)

module.exports = router