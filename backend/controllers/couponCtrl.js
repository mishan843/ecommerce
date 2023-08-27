const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");


const createCoupon = asyncHandler(async(req, res) => {
    try {
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw  new Error(error);        
    }
});

const getallCoupon = asyncHandler(async(req, res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        throw  new Error(error);        
    }
});

const updateCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try {
        const updatedcoupon = await Coupon.findByIdAndUpdate((id), req.body, {new:true});
        res.json(updatedcoupon);
    } catch (error) {
        throw  new Error(error);        
    }
});

const deleteCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const deletecoupon = await Coupon.findByIdAndDelete(id);
        res.json( deletecoupon);
    } catch (error) {
        throw  new Error(error);        
    }
});

const getCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getAcoupon = await Coupon.findById(id);
        res.json( getAcoupon);
    } catch (error) {
        throw  new Error(error);        
    }
});

module.exports = {createCoupon, getallCoupon, updateCoupon, deleteCoupon, getCoupon};