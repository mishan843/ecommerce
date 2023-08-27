const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
    },
    price:{
        type:Number
    },
    color:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Color",
    },
    cartTotal: Number,
    totalAfterDiscount:String,
    orderby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
},
{
    timestamps:true,
}
);

//Export the model
module.exports = mongoose.model('Cart', cartSchema);