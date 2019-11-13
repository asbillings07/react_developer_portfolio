const express = require('express')
const router = express.Router()
const { data } = require('../data.json')
const { projects } = data

router.get('/', (req, res) => {
  res.render('index', { projects })
})

router.get('/about', (req, res) => {
  const name = 'Aaron Billings'
  const phone = '678-523-5670'
  const email = 'asbillings2007@gmail.com'
  const linkedIn = 'https://www.linkedin.com/in/aaron-billings-9b429610a/'
  const github = 'https://github.com/asbillings07?tab=repositories'
  const twitter = 'https://twitter.com'
  res.render('about', { name, phone, email, linkedIn, github, twitter })
})

router.get('/layout', (req, res) => {
  const name = 'Aaron Billings'
  res.render('layout', { name })
})

module.exports = router
