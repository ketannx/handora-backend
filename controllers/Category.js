const Category=require("../models/Category")



exports.getAll=async(req,res)=>{
    try {
        const result=await Category.find({})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error fetching categories"})
    }
}

exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const result = await newCategory.save();
        res.status(201).json(result);
    } catch (error) {
        console.error(error); // Use console.error for errors
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
}