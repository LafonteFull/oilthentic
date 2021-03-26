const router = require('express').Router();
const ShareCountController = require('../controllers/shareCountController');

router.post('/', ShareCountController.Count)

router.get('/', ShareCountController.GetAll)

module.exports = router;