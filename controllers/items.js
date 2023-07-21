const newItem = (req, res) => {
  res.render('items/new', {title: 'Create a cupcake'})
}

const create = (req, res) => {
  console.log(req.body)
}

module.exports = {
  new: newItem,
  create
}