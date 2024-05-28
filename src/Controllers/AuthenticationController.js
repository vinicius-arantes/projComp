const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');

class AuthenticationController {
  async authenticate(req, res) {
    const { email, user_name, password } = req.body;

    const whereClause = {};
    if (email) {
      whereClause.email = email;
    } else if (user_name) {
      whereClause.user_name = user_name;
    } else {
      return res.status(401).json({ error: 'We need a e-mail or username' });
    }

    const user = await UserModel.findOne({
      whereClause: UserModel,
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }

    if (!user.password === password) {
      return res.status(401).json({ error: 'Password does not match!' });
    }

    const { id, user_name: userName } = user;

    const token = jwt.sign({ id, user_name: userName }, process.env.HASH_BCRYPT, {
      expiresIn: process.env.EXPIRE_IN,
    });

    return res.status(200).json({ user: { id, user_name: userName }, token });
   }
}

module.exports = new AuthenticationController();