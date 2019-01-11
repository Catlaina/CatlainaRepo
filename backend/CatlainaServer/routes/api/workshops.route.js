var express = require('express')
var router = express.Router()

// Getting the Todo Controller that we just created

var WorkshopController = require('../../controllers/workshops.controller');


// Map each API to the Controller Functions

router.get('/', WorkshopController.getWorkshops)

router.post('/', WorkshopController.createWorkshop)

router.put('/', WorkshopController.updateWorkshop)

router.delete('/:id',WorkshopController.removeWorkshop)


// Export the Router

module.exports = router;
