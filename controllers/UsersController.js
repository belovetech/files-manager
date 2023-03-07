import dbClient from '../utils/db';
import hashPassword from '../utils/hashPassword';

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    const user = await dbClient.db.collection('users').findOne({ email });

    if (user) {
      return res.status(400).json({ error: 'Already exist' });
    }

    const newUser = {
      email,
      password: hashPassword(password),
    };

    await dbClient.db.collection('users').insertOne(newUser);

    return res.status(200).json({
      id: newUser._id,
      email,
    });
  }
}

export default UsersController;
