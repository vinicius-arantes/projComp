const { Router } = require('express');
const { upload } = require('./configs/multer');
const schemaValidator = require('./Middlewares/schemaValidator');

const AuthenticationMiddleware = require('./Middlewares/authentication');

const AuthenticationController = require('./Controllers/AuthenticationController');
const authSchema = require('./schema/auth.schema.json');

const ProductController = require('./Controllers/ProductController');
const productSchema = require('./schema/create.product.schema.json');

const UserController = require('./Controllers/UserController');
const userSchema = require('./schema/create.user.schema.json');

const FileController = require('./Controllers/FileController');

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is on..." });
});

routes.post('/auth', schemaValidator(authSchema), AuthenticationController.authenticate);
routes.post('/products', schemaValidator(productSchema), ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.post('/users', schemaValidator(userSchema), UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.use(AuthenticationMiddleware);

routes.post('/forgot_password', UserController.rescue);

routes.post('/upload', upload.single('image'), FileController.upload);


module.exports = routes;