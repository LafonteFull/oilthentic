const { SocialMedia } = require('../models')

class Controller {
  static async Count (req, res, next) {
    const { socialMedia, shareCount } = req.body

    if (socialMedia === 'Facebook') {
      console.log('test facebook');
      const count = await SocialMedia.update({ shareCount }, { where : { name: socialMedia } })

      console.log(count);
      res.status(200).json(count)
    } else {      
      const count = await SocialMedia.increment('shareCount', { where: { name: socialMedia } })
  
      console.log(count);
      res.status(200).json(count);
    }
  }

  static async GetAll (req, res, next) {
    const allSocialMedia = await SocialMedia.findAll({ order: [['id', 'ASC']] })

    // console.log(allSocialMedia);
    res.status(200).json(allSocialMedia)
  }
}

module.exports = Controller;