const express = require('express');
const router = express.Router();
const notesCtl = require('../../controllers/notes');
const multer = require('multer');
const upload = multer();


router.get('/',notesCtl.index);

module.exports = router;