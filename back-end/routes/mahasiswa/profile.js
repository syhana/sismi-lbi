const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/mahasiswa/profile')

router.get('/detailAkunMhs', middleware.verifyTokenMahasiswa, controllers.detailAkun)
router.post('/editAkunMhs', middleware.verifyTokenMahasiswa, controllers.uploadd, controllers.editAkun)

module.exports = router