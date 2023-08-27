const express = require('express');
const {
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    unblockUser,
    blockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    createOrder,
    removeProdFromCart,
    updateProductQuantityFromCart,
    getMyOrders,
    getMonthWiseOrderIncome,
    getYearlyTotalOrders,
    getallOrders,
    getaOrder,
    updateOrder,
    emptyCart,
} = require('../controllers/userCtrl');
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const { checkout, paymentVerification } = require('../controllers/paymentCtrl');
const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
// router.put('/order/update-order/:id',authMiddleware, isAdmin, updateOrderStatus);
router.put('/password', authMiddleware, updatePassword);
router.post('/cart/create-order',authMiddleware, createOrder);
// route    r.post('/cart/applycoupon',authMiddleware, applyCoupon);
router.post('/order/checkout',authMiddleware, checkout);
router.post('/order/paymentVerification',authMiddleware, paymentVerification);
router.post('/cart',authMiddleware, userCart);
router.post('/cart/product', authMiddleware, getUserCart);

router.post('/login', loginUserCtrl);
router.post('/admin-login', loginAdmin);
router.get('/getmothwiseorderincome',authMiddleware, getMonthWiseOrderIncome);

router.get("/getmyorders", authMiddleware, getMyOrders)
router.get('/all-users', getallUser);
router.get('/getorder/:id', authMiddleware, getaOrder);
router.get('/getallorders', authMiddleware,isAdmin, getallOrders);
router.put('/updateorder/:id', authMiddleware,isAdmin, updateOrder);

// router.post('/getorderbyuser/:id', authMiddleware,isAdmin, getOrderByUser);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/getyearlyorders', authMiddleware, getYearlyTotalOrders);



router.get('/refresh', handleRefreshToken); 
router.get('/logout', logout); 
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/delete-product-cart/:cartItemId', authMiddleware, removeProdFromCart);
router.delete('/update-product-cart/:cartItemId/:newQuantity', authMiddleware, updateProductQuantityFromCart);


router.delete('/:id', deleteaUser);
router.put('/edit-user', authMiddleware, updatedUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/blocked-user/:id', authMiddleware,isAdmin, blockUser);
router.put('/unblocked-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;    