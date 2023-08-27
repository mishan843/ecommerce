const express = require('express');
const router = express.Router();
const {createCoupon, getallCoupon, updateCoupon, deleteCoupon, getCoupon} = require("../controllers/couponCtrl");

const {isAdmin, authMiddleware} =require('../middlewares/authMiddleware');

router.post('/',authMiddleware, isAdmin,  createCoupon);
router.get('/', authMiddleware, getallCoupon);
router.get('/:id', authMiddleware, getCoupon);
router.put('/:id', authMiddleware, isAdmin,  updateCoupon);
router.delete('/:id', authMiddleware, isAdmin,  deleteCoupon);




module.exports = router;