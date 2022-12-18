const express = require('express');
const router = express.Router();
const ugUpdateController = require('../controllers/ugUpdateControlAPI');

router.get('/enabled', ugUpdateController.ug_update_list_enabled);
router.get('/disabled', ugUpdateController.ug_update_list_disabled);
router.get('/all', ugUpdateController.ug_update_list_all);
router.post('/create', ugUpdateController.ug_update_create);
router.get('/:id', ugUpdateController.ug_update_details);
router.delete('/:id', ugUpdateController.ug_update_delete);
router.patch('/:id', ugUpdateController.ug_update_patch);

module.exports = router;