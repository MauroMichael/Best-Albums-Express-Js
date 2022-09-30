const { Router } = require('express');
const router = Router();
const { renderIndex, renderNewEntry, createNewEntry, deleteEntry } = require('../controllers/entries.controller');


router.get('/new-entry', renderNewEntry);

router.post('/new-entry', createNewEntry);

router.get("/delete/:id", deleteEntry)

router.get('/', renderIndex);

module.exports = router;