module.exports = function (req, res, next) {
  if (req.isAuthenticated()) return next()
  console.log('ensure logged in is working')
  res.redirect('/auth/google')
}
