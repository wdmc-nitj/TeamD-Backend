const express = require('express');
const router = express.Router();
const  ugUpdateController = require('../controllers/ugUpdateController');

router.get('/', ugUpdateController.ug_update_list);
router.get('/create', ugUpdateController.ug_update_create_get);
router.post('/create', ugUpdateController.ug_update_create_post);
router.delete('/:id', ugUpdateController.ug_update_delete);

module.exports = router;