const express=require("express");
const FilterController=require("../controllers/filter");


const router=express.Router();


router.get('/',FilterController.getallRestaurants);
router.get('/:name',FilterController.getRestaurantsByName);
router.post('/',FilterController.postRestaurantsByName);
router.post('/sort',FilterController.postRestaurantsByNameBySort);
router.post('/:page',FilterController.postRestaurantsByNameByPage);
router.post('/filter/:pageNum',FilterController.getRestaurants);
router.get('/filter/:city',FilterController.getRestaurantsByCity);



module.exports=router;