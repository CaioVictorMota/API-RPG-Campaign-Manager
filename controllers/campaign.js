const express = require('express')
const Campaign = require('../models/campaign.js')

const router = new express.Router()
const endPoint = '/campaigns'

//Routes for /campaign/
router.route('/')
.post(async (req, res) => {
    try {
        const newCampaign = new Campaign(req.body)
        await newCampaign.save()
        res.status(201)
            .location('/campaign/' + newCampaign._id)
            .send()
    } catch (error) {
        res.status(400).send(error)
    }
})
.get(async (req, res) => {
    try{
        const campaigns = await Campaign.find({})
        if (campaigns.length !== 0) {
            return res.status(200).send(campaigns)
        }
        res.status(204).send(campaigns)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Routes for /campaign/:id
router.route('/:id')
.get(async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id)
        if (campaign) {
            return res.status(200).send(campaign)
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
})
.put(async (req, res) => {
    try {
        const updatedCampaign = await Campaign.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                system: req.body.system,
                dm: req.body.dm,
                description: req.body.description,
                players: req.body.players
            },
            {
                new: true,
                overwrite: true,
                runValidators: true
            }
        )
        if (updatedCampaign) {
            return res.status(200).send()
        }
        res.status(404).send(error)
    } catch (error) {
        res.status(500).send(error)
    }
})
.patch(async (req, res) => {
    try {
        const updatedCampaign = await Campaign.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        if (updatedCampaign) {
            return res.status(200).send()
        }
        res.status(404).send(error)
    } catch (error) {
        res.status(500).send(error)
    }
})
.delete(async (req, res) => {
    try {
        await Campaign.findByIdAndDelete(req.params.id)
        return res.status(200).send()
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = {endPoint, router}