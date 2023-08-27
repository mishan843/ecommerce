const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id:"rzp_test_kuZenGGIItCbKN", key_secret:"ST0HH0Tyx7Gm50wkdcd9oy9o"
})

const checkout = async(req, res) => {
    const {amount} =req.body;
    const option = {
        amount: amount * 100,
        currency:"INR"
    }
    const order = await instance.orders.create(option)
    res.json({
        success:true,
        order
    })
    
}

const paymentVerification = async(req, res)=> {
    const {razorpayPaymentId, razorpayOrderId} = req.body;
    res.json({
        razorpayOrderId,razorpayPaymentId
    })

}

module.exports={
    checkout, paymentVerification
}