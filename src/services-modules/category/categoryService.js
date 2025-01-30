const Category = require('../../models/category');

const categoryService = {
    async getAllCategories(req, res) {
        try {
            const categories = await Category.findAll();
            res.status(200).json({
                success: true,
                data: categories
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

};

module.exports = categoryService;