const express = require('express');
const router = express.Router();
const notesCtl = require('../../controllers/notes');


router.post('/',notesCtl.create);
router.get('/',notesCtl.index);


module.exports = router;