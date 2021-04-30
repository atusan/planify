const express = require('express');
const router = express.Router();
const notesCtl = require('../../controllers/notes');


router.post('/',notesCtl.create);
router.get('/',notesCtl.index);
router.get('/details/:id',notesCtl.show);
router.put('/edit/:id',notesCtl.update);
router.delete('/delete/:id',notesCtl.delete)



module.exports = router;