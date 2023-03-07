import dbClient from '../utils/db';
import hashPassword from '../utils/hashPassword';

class AuthController {
  static async getConnect(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: 'Unauthorized' });
    }

    const encoded = authHeader.split(' ')[1];
    const decoded = Buffer.from(encoded, 'base64').toString();
    const [email, password] = decoded.split(':');

    const user = await dbClient.db
      .collection('users')
      .findOne({ email, password: hashPassword(password) });

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return res.status(200).json({ status: 'success' });
  }

  //   static async getDisconnect() {}

  //   static async getMe() {}
}

export default AuthController;
