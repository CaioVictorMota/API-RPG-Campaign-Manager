const express = require('express')
const Campaign = require('../models/campaign.js')

const router = new express.Router()

//POST Campaign
router.post('/campaign', (req, res) => {
    res.send('This is Post for Campaign')
})

//GET All Campaigns
router.get('/campaign', (req, res) => {
    res.send('This is Get for All Campaigns')
})

//GET One Campaign
router.get('/campaign/:id', (req, res) => {
    res.send('This is Get for Campaign of ID ' + req.params.id)
})

//PATCH One Campaign
router.patch('/campaign/:id', (req, res) => {
    res.send('This is Patch for Campaign of ID ' + req.params.id)
})

//DELETE One Campaign
router.delete('/campaign/:id', (req, res) => {
    res.send('This is Delete for Campaign of ID ' + req.params.id)
})

export default router