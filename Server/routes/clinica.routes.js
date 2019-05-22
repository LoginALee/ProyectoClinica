const express = require('express');
const router = express.Router();
const persona = require('../Controllers/persona.controller');

router.get('/', persona.getPersonas);
router.post('/', persona.createPersona);
router.get('/:id', persona.getPersonaUnica);
router.put('/:id', persona.editPersona);
router.delete('/:id', persona.deletePersona);



module.exports = router;