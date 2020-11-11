const express = require('express')
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
    res.send('Post Ok. CID: ' + req.params[campaignRouter.idParam])
})
.get(async (req, res) => {
    res.send('Get All OK. CID: ' + req.params[campaignRouter.idParam])
})

//Specific Sessions Routes
router.route(endPoint + ':' + idParam)
.get(async (req, res) => {
    res.send('Get One OK. CID: ' + req.params[campaignRouter.idParam] 
    + '; SID: ' + req.params[idParam])
})
.put(async (req, res) => {
    res.send('PUT One OK. CID: ' + req.params[campaignRouter.idParam] 
    + '; SID: ' + req.params[idParam])
})
.patch(async (req, res) => {
    res.send('PATCH One OK. CID: ' + req.params[campaignRouter.idParam] 
    + '; SID: ' + req.params[idParam])
})
.delete(async (req, res) => {
    res.send('DELETE One OK. CID: ' + req.params[campaignRouter.idParam] 
    + '; SID: ' + req.params[idParam])
})


module.exports = {endPoint, router}