const express = require('express')
const Campaign = require('../models/campaign.js')

const router = new express.Router()

//POST Campaign
router.post('/campaign', async (req, res) => {
    try {
        const newCampaign = new Campaign(req.body)
        await newCampaign.save()
        res.status(201)
            .location('/campaign/' + newCampaign._id)
            .send('Campaign Created. ID: ' + newCampaign._id)
    } catch (error) {
        res.status(400).send(error)
    }
})

//GET All Campaigns
router.get('/campaign', async (req, res) => {
    try{
        const campaigns = await Campaign.find({})
        if (campaigns.length === 0) {
            return res.status(204).send(campaigns)
        }
        res.status(200).send(campaigns)
    } catch (error) {
        res.status(500).send(error)
    }
})

//GET One Campaign
router.get('/campaign/:id', async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id)
        if (campaign) {
            return res.status(200).send(campaign)
        }
        res.status(404).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

//PATCH One Campaign
router.patch('/campaign/:id', (req, res) => {
    res.send('This is Patch for Campaign of ID ' + req.params.id)
})

//DELETE One Campaign
router.delete('/campaign/:id', (req, res) => {
    res.send('This is Delete for Campaign of ID ' + req.params.id)
})

module.exports = router