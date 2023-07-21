const Item = require('../models/item')

const newItem = (req, res) => {
  res.render('items/new', {title: 'Create a cupcake'})
}

const create = async (req, res) => {
  console.log(req.body)
  if (req.body.allergenFree === 'on') {
    console.log('in the allergen block')
    req.body.allergenFree = true
  }
  const item = new Item(req.body)
  try {
    await item.save()
    console.log(item)
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {
  new: newItem,
  create
}