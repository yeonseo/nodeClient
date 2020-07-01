import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Add POST - /api/join
router.post('/join', (req, res) => {
  if (req.body.username !== '' && req.body.password !== '') {
    req.session.authUser = { username: req.body.username }
    return res.json({ username: req.body.username })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
