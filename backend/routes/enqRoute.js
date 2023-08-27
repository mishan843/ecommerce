const express = require('express');
const router = express.Router();
const {createEnquiry, updateEnquiry, deleteEnquiry, getAllEnquiry, getEnquiry} = require('../controllers/enqCtrl');

const {isAdmin, authMiddleware} =require('../middlewares/authMiddleware');

router.get('/', getAllEnquiry);
router.get('/:id', getEnquiry);
router.post('/', createEnquiry);
router.put('/:id', authMiddleware, isAdmin, updateEnquiry);
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry);




module.exports = router;