const { Router } = require('express');

const ProductController = require('./Controllers/ProductController');
const UserController = require('./Controllers/UserController');

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is on..." });
});

routes.post('/products', ProductController.store);

routes.get('/products', ProductController.index);

routes.get('/products/:id', ProductController.show);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

routes.post('/products', UserController.store);

routes.get('/products', UserController.index);

routes.get('/products/:id', UserController.show);

routes.put('/products/:id', UserController.update);

routes.delete('/products/:id', UserController.destroy);

module.exports = routes;