// backend/routes/dogs.js
const express = require('express');
const router = express.Router();
const db = require('../../database/preguntas');

// Obtener la lista de perritos
router.get('/', (req, res) => {
    res.json(db);
});

module.exports = router;
