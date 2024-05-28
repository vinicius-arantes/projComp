const { Router } = require('express');
const schemaValidator = require('./Middlewares/schemaValidator');

const ProductController = require('./Controllers/ProductController');

const UserController = require('./Controllers/UserController');
const userSchema = require('./schema/create.user.schema.json');

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is on..." });
});

routes.post('/products', ProductController.store);

routes.get('/products', ProductController.index);

routes.get('/products/:id', ProductController.show);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

routes.post('/users', schemaValidator(userSchema), UserController.store);

routes.get('/users', UserController.index);

routes.get('/users/:id', UserController.show);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.destroy);

module.exports = routes;