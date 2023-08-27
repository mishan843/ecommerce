const express = require('express');
const router = express.Router();
const {createColor, updateColor, deleteColor, getAllColor, getColor} = require('../controllers/colorCtrl');

const {isAdmin, authMiddleware} =require('../middlewares/authMiddleware');

router.get('/', getAllColor);
router.get('/:id', getColor);
router.post('/', authMiddleware, isAdmin, createColor);
router.put('/:id', authMiddleware, isAdmin, updateColor);
router.delete('/:id', authMiddleware, isAdmin, deleteColor);




module.exports = router;