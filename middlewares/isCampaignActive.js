const Campaign = require('../models/campaign.js')
const campaignRouter = require('../controllers/campaign')

async function isCampaignActive (req, res, next) {
    const campaign = await Campaign.findById(req.params[campaignRouter.idParam])
    if(campaign.active === true){
        return next()
    }
    res.status(403).send('Campaign is Inactive')
} 

module.exports = isCampaignActive