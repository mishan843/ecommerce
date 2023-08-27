const express = require('express');
const router = express.Router();
const {createCategory, updateCategory, deleteCategory, getAllCategory, getCategory} = require('../controllers/blogCatCtrl');

const {isAdmin, authMiddleware} =require('../middlewares/authMiddleware');

router.get('/', getAllCategory);
router.get('/:id', getCategory);
router.post('/', authMiddleware, isAdmin, createCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);




module.exports = router;