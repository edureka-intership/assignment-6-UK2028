const Restaurants=require("../models/Restaurants");


exports.getallRestaurants=(req,res)=>{
    Restaurants.find()
    .then((result)=>{
        res.status(200).json({
            message:"restaurants data are fetched successfully",
            Data:result
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message:"data is not fetched",
            ERROR:error
        })
    })
}

exports.getRestaurantsByName=(req,res)=>{
    let restro_name={
        name:req.params.name
    };
    Restaurants.find(restro_name)
    .then((result)=>{
        res.status(200).json({
            message:"restaurants data are fetched successfully",
            Data:result
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message:"data is not fetched",
            ERROR:error
        })
    })
}

exports.postRestaurantsByName=(req,res)=>{
    Restaurants.find()
    .then((result)=>{
        res.status(200).json({
            message:"restaurants data are fetched successfully",
            Data:result
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message:"data is not fetched",
            ERROR:error
        })
    })
}

exports.postRestaurantsByNameByPage=(req,res)=>{
    Restaurants.find().limit(2).skip(2*(req.params.page-1))
    .then((result)=>{
        res.status(200).json({
            message:"restaurants data are fetched successfully",
            Data:result
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message:"data is not fetched",
            ERROR:error
        })
    })
}

exports.postRestaurantsByNameBySort=(req,res)=>{
    Restaurants.find().sort({cost:req.body.sort})
    .then((result)=>{
        res.status(200).json({
            message:"restaurants data are fetched successfully",
            Data:result
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message:"data is not fetched",
            ERROR:error
        })
    })
}

exports.getRestaurants=(req,res)=>{
    let filter={};
    if(req.body.lowerCost&&req.body.UpperCost){
        filter.cost={
            $gt:req.body.lowerCost,
            $lt:req.body.UpperCost 
        }
    }
    if(req.body.Cuisine.length!=0){
        filter["Cuisine.name"]={$in:req.body.Cuisine}
    }
    if(req.body.city_id){
        filter.city=req.body.city_id
    }
    Restaurants.find(filter).limit(2).skip(2*(req.params.pageNum-1)).sort({cost:req.body.sort})
    .then((data)=>{
        res.status(200).json({
            message:"restaurants are fetched successfully",
            Data:data
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:"data is not fetched",
            ERROR:error
        })
    })
}

exports.getRestaurantsByCity=(req,res)=>{
    let filterCity={city_name:req.params.city}
    Restaurants.find(filterCity)
    .then((data)=>{
        res.status(200).json({
            message:"restauranrs city-wise data is fetched successfully",
            Data:data
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:"restaurant data is not fetched successfully",
            ERROR:error
        })
    })
}



     