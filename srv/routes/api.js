const router = require('express').Router()
const {getMarkdown} = require('../service/github.service')

router.get(/markdown.*/, async (req, res, next) => {
  getMarkdown()
  res.send(req.path)
})

module.exports = router