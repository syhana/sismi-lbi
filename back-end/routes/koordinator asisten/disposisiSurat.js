const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/koordinator asisten/disposisiSurat')

router.get('/listDisposisiKordas', middleware.verifyTokenKordas, controllers.listDisposisi)
router.get('/detailDisposisiKordas/:id_disposisi', middleware.verifyTokenKordas, controllers.detailDisposisi)
router.post('/ttdKordas/:id_disposisi', middleware.verifyTokenKordas, controllers.tandaTangan)

module.exports = router