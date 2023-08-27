const express = require('express');
const router = express.Router();
const {createBrand, updateBrand, deleteBrand, getAllBrand, getBrand} = require('../controllers/brandCtrl');

const {isAdmin, authMiddleware} =require('../middlewares/authMiddleware');

router.get('/', getAllBrand);
router.get('/:id', getBrand);
router.post('/', authMiddleware, isAdmin, createBrand);
router.put('/:id', authMiddleware, isAdmin, updateBrand);
router.delete('/:id', authMiddleware, isAdmin, deleteBrand);




module.exports = router;