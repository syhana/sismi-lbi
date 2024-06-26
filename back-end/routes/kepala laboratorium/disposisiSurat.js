const expresss = require('express')
const router = expresss.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/kepala laboratorium/disposisiSurat')

router.get('/listDisposisiKalab', middleware.verifyTokenKalab, controllers.listDisposisi)
router.get('/detailDisposisiKalab/:id_disposisi', middleware.verifyTokenKalab, controllers.detailDisposisi)
router.post('/ttdKalab/:id_disposisi', middleware.verifyTokenKalab, controllers.tandaTangan)

module.exports = router