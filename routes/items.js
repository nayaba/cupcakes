const express = require('express')
const router = express.Router()
const itemsCtrl = require('../controllers/items')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/new', ensureLoggedIn, itemsCtrl.new)

module.exports = router
