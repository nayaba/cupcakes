const express = require('express')
const router = express.Router()
const itemsCtrl = require('../controllers/items')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', itemsCtrl.index)
router.post('/', itemsCtrl.create)
router.get('/new', itemsCtrl.new)

module.exports = router
