const Campaign = require('../models/campaign.js')
const campaignRouter = require('../controllers/campaign')

async function checkCampaignExistence (req, res, next) {
    const campaign = await Campaign.findById(req.params[campaignRouter.idParam])
    if (campaign) {
        return next()
    }
    res.status(404).send()
}

module.exports = checkCampaignExistence