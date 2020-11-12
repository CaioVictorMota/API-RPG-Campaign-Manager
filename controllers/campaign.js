const express = require('express')
const Campaign = require('../models/campaign.js')

const router = new express.Router()
const endPoint = '/campaigns/'
const idParam = 'campaignId'

//All Campaigns Routes
router.route(endPoint)
.post(async (req, res) => {
    try {
        const newCampaign = new Campaign(req.body)
        await newCampaign.save()
        res.status(201)
            .location(endPoint + newCampaign._id)
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

//Specific Campaign Routes
router.route(endPoint + ':' + idParam)
.get(async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params[idParam])
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
            req.params[idParam],
            {
                name: req.body.name,
                system: req.body.system,
                dm: req.body.dm,
                description: req.body.description,
                active: req.body.active,
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
        delete req.body.sessions
        const updatedCampaign = await Campaign.findByIdAndUpdate(
            req.params[idParam],
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
        const campaign = await Campaign.findByIdAndDelete(req.params[idParam])
        if (campaign) {
            return res.status(200).send()
        }
        res.status(404).send()
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = {endPoint, router, idParam}