const UserModel = require('../Models/UserModel');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

class UserController {
    async store(req, res){
        
        const { user_name, password, email } = req.body;

        if(!user_name || !password  || !email){
            res.status(404).json({message: "Some information is missing!"});
        }

        const createdUser = await UserModel.create(req.body);

        return res.status(200).json({ message: 'User created successfully!'});
    }

    async index(req, res){
        const users = await UserModel.find();

        return res.status(200).json( users );
    }

    async show(req, res){
        try {
            const { id } = req.params;

        const user = await UserModel.findById(id);

        if(!user) {
            return res.status(404).json({message: "User not found!"});
        }

        return res.status(200).json( user );

        } catch (error) {
            res.status(404).json({message: "Verify user Id!"});
        }

    }

    async update(req, res){
        try {
            const { id } = req.params;

            await UserModel.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "User updated successfully!"});

        } catch (error) {

            res.status(404).json({message: "Verify user Id!"});
        }
    }

    async destroy(req, res){
        try {
            const { id } = req.params;

            await UserModel.findByIdAndDelete(id);

            res.status(200).json({message: "User deleted successfully!"});

        } catch (error) {

            res.status(404).json({message: "Verify user Id!"});
        }
    }

    async rescue(req, res){
        const { email } = req.body;

        try {

            const user = await UserModel.findOne({ email });
            
            if(!user){
                return res.status(400).json({ message: "User not found!"});
            }

            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();
            now.setHours(now.getHours() + 1);

            await UserModel.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now,
                }
            });

            mailer.sendMail({
                to: email,
                from: 'vinicius.arantes@compjunior.com.br',
                template: 'auth/forgot_password',
                context: { token },
            }, (err) => {
                if(err){
                    console.log(err);
                    return res.status(400).json({ message: 'Cannot send forgot password email!'});
                }
                return res.status(200).json({ message: "Email sent successfully!"});
            })
        } catch (error) {
            return res.status(400).send({ message: "Unable to change the password!"}); 
        }
    }
}

module.exports = new UserController;