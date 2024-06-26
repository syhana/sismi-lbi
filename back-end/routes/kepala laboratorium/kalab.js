const expresss = require('express')
const router =expresss.Router()
const middleware = require('../../middleware/authentication')
const controllers =require('../../controllers/kepala laboratorium/kalab')

router.post('/loginKalab', controllers.loginKalab)
router.delete('/logoutKalab', middleware.verifyTokenKalab, controllers.logoutKalab)

module.exports = router