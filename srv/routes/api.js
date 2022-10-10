const router = require('express').Router()

router.get(/markdown.*/, (req, res, next) => {
  res.send(req.path)
})

module.exports = router