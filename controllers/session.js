const express = require('express')
const Campaign = require('../models/campaign.js')
const Session = require('../models/session.js')
const campaignRouter = require('./campaign.js')
const checkCampaignExistence = require('../middlewares/checkCampaignExistence')
const isCampaignActive = require('../middlewares/isCampaignActive')

const router = new express.Router()
const endPoint = campaignRouter.endPoint + ':' + campaignRouter.idParam 
        + '/sessions/'
const idParam = 'sessionId'

router.use(endPoint, checkCampaignExistence)

//All Sessions Routes
router.route(endPoint)
.post(isCampaignActive, async (req, res) => {
    try{
        const campaign = await Campaign.findById(
                req.params[campaignRouter.idParam])
        const newSession = new Session(req.body)
        campaign.sessions.push(newSession)

        await Campaign.findByIdAndUpdate(
                req.params[campaignRouter.idParam], campaign)

        const location = (endPoint + newSession._id).replace(
                ':'+campaignRouter.idParam, req.params[campaignRouter.idParam])
        res.status(201)
            .location(location)
            .send()
    } catch (error) {
        res.status(400).send(error)
    }
})
.get(async (req, res) => {
    try {
        const campaign = await Campaign.findById(
                req.params[campaignRouter.idParam])

        if (campaign.sessions.length !== 0) {
            return res.status(200).send(campaign.sessions)
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

//Specific Sessions Routes
router.route(endPoint + ':' + idParam)
.get(async (req, res) => {
    try {
        const campaign = await Campaign.findById(
                req.params[campaignRouter.idParam])
    
        const session = campaign.sessions.find(
                session => session._id == req.params[idParam])

        if (session) {
            return res.status(200).send(session)
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
    }
})
.delete(async (req, res) => {
    try {
        const campaign = await Campaign.findById(
                req.params[campaignRouter.idParam])
    
        const session = campaign.sessions.find(
                session => session._id == req.params[idParam])

        if (session) {
            const sessionIndex = campaign.sessions.findIndex(
                    session => session._id == req.params[idParam])

            campaign.sessions.splice(sessionIndex, 1)

            await Campaign.findByIdAndUpdate(
                    req.params[campaignRouter.idParam], campaign)

            return res.status(200).send()
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = {endPoint, router}