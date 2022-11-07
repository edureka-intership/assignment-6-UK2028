const express=require('express');
const locationController=require("../controllers/location");


const router=express.Router();


router.get('/',locationController.getRestaurantByLocation);


module.exports=router;