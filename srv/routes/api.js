const router = require('express').Router()
const { getMarkdown } = require('../service/github.service')

router.get('/markdown/:owner/:repo/:path(*)', async (req, res, next) => {
  res.send(await getMarkdown(req.params))
  // res.send(req.path)
})

module.exports = router