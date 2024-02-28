/**
 * controller for creating the category 
 * 
 * POST   localhost:8888/ecomm/api/v1/categories
 */
const category_model = require("../models/category.model")

exports.createNewCategory = async(req , res)=>{
    // Read the req body 
    //create the category object

    const cat_data = {
        name : req.body.name,
        description :  req.body.description
    }

    try{
        // Insert into mongodb

    const category = await category_model.create(cat_data)

    return res.status(201).send(category)

    }catch(err){
        console.log("error while creating the category",err)
        return res.status(500).send({
            message : "Error while creating the category"
        })
    }
    


    // return the reponse of the created category
}