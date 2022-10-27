const express = require('express');
const router = express.Router();
const  updateController = require('../controllers/updateController');

router.get('/', updateController.update_index);
router.get('/create', updateController.update_create_get);
router.post('/create', updateController.update_create_post);
router.delete('/:id', updateController.update_delete);

module.exports = router;