const jose = require('jose')
const path = require('path')
const fs = require('fs')
const { Octokit } = require('octokit')
const { createAppAuth } = require("@octokit/auth-app")

const privateKey = () => process.env.GITHUB_SECRET || fs.readFileSync(path.join(__dirname, '../private_key.pem')).toString('utf8')

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 245458,
    privateKey: privateKey(),
    installationId: 29994961
  }
})

const getMarkdown = async (params) => {
  console.log(params)
  const text = await getRepoSource(params)
  const q = await octokit.request('POST /markdown', {
    text
  }).then(e => e.data)
  console.log(q)
  return q
}

const getRepoSource = async ({ owner, repo, path }) => {
  console.log(`https://raw.githubusercontent.com/${owner}/${repo}/${path}`)
  const src = await (fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${path}`).then(e => e.text()))
  // `GET /repos/${owner}/${repo}/contents/${path}`,
  // {
  // owner,
  // repo,
  // path,
  // }

  console.log(await src)
  return await src
}

module.exports = {
  getMarkdown,
  getRepoSource
}