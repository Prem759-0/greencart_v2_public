import User from "../models/User.js";


// Update User CartData : /api/cart/update
export const updateCart = async (req, res) => {
    try {
        // cartItems comes from the client body; user id comes from authUser middleware
        const { cartItems } = req.body;
        const userId = req.user && req.user.id;

        if(!userId){
            return res.json({success: false, message: 'Not Authorized'});
        }

        await User.findByIdAndUpdate(userId, {cartItems});
        res.json({success: true, message: 'Cart Updated'})
    } catch (error) {
          console.log(error.message);
            res.json({success: false, message: error.message})
    }
}