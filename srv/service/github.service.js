const jose = require('jose')
const path = require('path')
const fs = require('fs')
const {Octokit} = require('octokit')
const { createAppAuth } = require("@octokit/auth-app")
const privateKey = () => fs.readFileSync(path.join(__dirname, '../private_key.pem')).toString('utf8')

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 245458,
    privateKey: privateKey(),
    installationId: 29994961
  }
})

const getMarkdown = async () => {
  const q = await octokit.request('POST /markdown', {
    text: "# Hello World"
  })
  console.log(q)
  return q
}

module.exports = {
  getMarkdown
}