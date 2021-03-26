const { SocialMedia } = require('../models')

class Controller {
  static async Count (req, res, next) {
    try {
      const { socialMedia, shareCount } = req.body
  
      if (socialMedia === 'Facebook') {
        const count = await SocialMedia.update({ shareCount }, { where : { name: socialMedia } })
        if (count) {
          res.status(200).json(count);
        } else {
          throw { message: 'Error update share count'}
        }
      } else {      
        const count = await SocialMedia.increment('shareCount', { where: { name: socialMedia } })
        console.log(count);
        if (count) {
          res.status(200).json(count);
        } else {
          throw { message: 'Social Media not found'}
        }
      }
    } catch (err) {
      next(err)
    }
  }

  static async GetAll (req, res, next) {
    try {
      const allSocialMedia = await SocialMedia.findAll({ order: [['id', 'ASC']] })
  
      if (allSocialMedia) {
        res.status(200).json(allSocialMedia);
      } else {
        throw new Error
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller;