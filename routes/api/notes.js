const express = require('express');
const router = express.Router();
const notesCtl = require('../../controllers/notes');

console.log('hitting create') 
router.post('/',notesCtl.create);
console.log('hitting index') 
router.get('/',notesCtl.index);
console.log('hitting show') 
router.get('/details/:id',notesCtl.show);
console.log('hitting update') 
router.put('/edit/:id',notesCtl.update);



module.exports = router;