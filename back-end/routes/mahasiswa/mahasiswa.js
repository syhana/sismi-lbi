const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/mahasiswa/mahasiswa')
const middleware = require('../../middleware/authentication')

router.post('/registerMhs', controllers.uploadd, controllers.registrasiMahasiswa)
router.post('/loginMhs', controllers.loginMahasiswa)
router.delete('/logoutMhs', middleware.verifyTokenMahasiswa, controllers.logoutMahasiswa)

module.exports = router