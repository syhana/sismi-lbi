const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/asisten/disposisiSurat')

router.get('/dataDisposisiSurat', middleware.verifyTokenAsisten, controllers.dataDisposisi)
router.get('/tolakDisposisi/:id_disposisi', middleware.verifyTokenAsisten, controllers.menolakDisposisi)
router.get('/kirimDisposisi/:id_disposisi', middleware.verifyTokenAsisten, controllers.kirimDisposisi)
router.get('/selesaiDisposisi/:id_disposisi', middleware.verifyTokenAsisten, controllers.selesaiDisposisi)
router.get('/detailDisposisi/:id_disposisi', middleware.verifyTokenAsisten, controllers.detailSurat)

module.exports = router