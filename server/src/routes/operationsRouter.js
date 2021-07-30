let express = require('express');
let router = express.Router();
const operationsController = require('../controllers/operationsController')

/* Routes */
//GET ALL OPERATIONS
router.get('/operation/list', operationsController.getOperations );
//CREATE
router.post('/operation/create', operationsController.createOperation );
//UPDATE
router.put('/operation/update/:id', operationsController.updateOperation );
//DELETE
router.delete('/operation/delete/:id', operationsController.deleteOperation );

module.exports = router;
