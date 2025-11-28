const Brand=require("../models/Brand")

exports.createBrand = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Brand name is required." });
        }

        // Check for duplicate
        const existing = await Brand.findOne({ name: name.trim() });
        if (existing) {
            return res.status(409).json({ message: "Brand already exists." });
        }

        const brand = new Brand({ name: name.trim() });
        const savedBrand = await brand.save();

        res.status(201).json(savedBrand);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating brand." });
    }
};


exports.getAll=async(req,res)=>{
    try {
        const result=await Brand.find({})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error fetching brands"})
    }
}