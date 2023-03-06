import dbClient from '../utils/db';
import redisClient from '../utils/redis';

exports.getStatus = (req, res) => {
  if (dbClient.isAlive() && redisClient.isAlive()) {
    res.status(200).json({ redis: true, db: true });
  }
};

exports.getStats = (req, res) => {
  res
    .status(200)
    .json({ users: dbClient.nbUsers(), files: dbClient.nbFiles() });
};
