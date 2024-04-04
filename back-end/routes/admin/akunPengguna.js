const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/akunPengguna')
const middleware = require('../../middleware/authentication')

router.post('/tambahRole', middleware.verifyTokenAdmin, controllers.tambahRole)
router.post('/tambahPengguna', middleware.verifyTokenAdmin, controllers.uploadd, controllers.tambahPengguna)
router.get('/dataPengguna', middleware.verifyTokenAdmin, controllers.dataPengguna)
router.get('/detailPengguna/:nama', middleware.verifyTokenAdmin, controllers.detailPengguna)
router.delete('/hapusPengguna/:nama', middleware.verifyTokenAdmin, controllers.hapusPengguna)
router.post('/editPengguna/:nama', middleware.verifyTokenAdmin, controllers.uploadd, controllers.editPengguna)

module.exports = router