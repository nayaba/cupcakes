const newItem = (req, res) => {
  res.render('items/new', {title: 'Create a cupcake'})
}

module.exports = {
  new: newItem
}