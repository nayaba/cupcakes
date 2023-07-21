const Item = require('../models/item')

const newItem = (req, res) => {
  res.render('items/new', {title: 'Create a cupcake'})
}

const create = async (req, res) => {
  if (req.body.allergenFree === 'on') {
    req.body.allergenFree = true
  }
  const item = new Item(req.body)
  try {
    await item.save()
    res.redirect('/items')
  } catch (err) {
    console.log(err.message)
    res.redirect('/items/new')
  }
}

const index = async (req, res) => {
  const items = await Item.find({})
  res.render('items/index', {title: 'All Items', items})
}

module.exports = {
  new: newItem,
  create,
  index
}