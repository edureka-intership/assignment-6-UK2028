const location = require('../models/location');

exports.getRestaurantByLocation=(req,res)=>{
    location.find()
    .then((data)=>{
        res.status(200).json({
            message:"restaurants location-wise are fetched successfully",
            Data:data
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:"restaurants are not fetched",
            ERROR:error
        })
    })
}