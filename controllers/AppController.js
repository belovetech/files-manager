import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static getStatus(req, res) {
    const dbStatus = {
      redis: dbClient.isAlive(),
      db: redisClient.isAlive(),
    };
    return res.status(200).send(dbStatus);
  }

  static getStats(req, res) {
    const stats = {
      users: dbClient.nbUsers(),
      files: dbClient.nbFiles(),
    };
    return res.status(200).send(stats);
  }
}

export default AppController;
