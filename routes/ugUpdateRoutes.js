const express = require('express');
const router = express.Router();
const ugUpdateController = require('../controllers/ugUpdateController');

router.get('/all', ugUpdateController.ug_update_list_enabled);
router.get('/disabled', ugUpdateController.ug_update_list_disabled);
router.get('/create', ugUpdateController.ug_update_create_get);
router.post('/create', ugUpdateController.ug_update_create_post);
// router.get('/:id', ugUpdateController.ug_update_details);
router.delete('/:id', ugUpdateController.ug_update_delete);
router.put('/:id', ugUpdateController.ug_update_put);

module.exports = router;