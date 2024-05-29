const ProductModel = require('../Models/ProductModels');
const { parseJwt } = require('../utils/decrypt');

class ProductController {
    async store(req, res){

        const { title, description, price} = req.body;

        const Header = req.headers['authorization'];
        const chefId = parseJwt(Header);

        if(!title || !description  || !price){
            res.status(404).json({message: "Some information is missing!"});
        }

        let newProduct = {};
        
        newProduct['title'] = req.body.title;
        newProduct['description'] = req.body.description;
        newProduct['price'] = req.body.price;
        newProduct['image'] = req.body.image;
        newProduct['chefId'] = chefId.user_name;
        console.log(newProduct);

        const createdProduct = await ProductModel.create(newProduct);

        return res.status(200).json({ message: 'Product added successfully!'});
    }

    async index(req, res){
        const products = await ProductModel.find();

        return res.status(200).json( products );
    }

    async show(req, res){
        try {
            const { id } = req.params;

        const product = await ProductModel.findById(id);

        if(!product) {
            return res.status(404).json({message: "Product not found!"});
        }

        return res.status(200).json( product );

        } catch (error) {
            res.status(404).json({message: "Verify product Id!"});
        }

    }

    async update(req, res){
        try {
            const { id } = req.params;

            await ProductModel.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Product updated successfully!"});

        } catch (error) {

            res.status(404).json({message: "Verify product Id!"});
        }
    }

    async destroy(req, res){
        try {
            const { id } = req.params;

            await ProductModel.findByIdAndDelete(id);

            res.status(200).json({message: "Product deleted successfully!"});

        } catch (error) {

            res.status(404).json({message: "Verify product Id!"});
        }
    }
}

module.exports = new ProductController;