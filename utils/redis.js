import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => {
      console.log(`ERROR: ${err}`);
    });
  }

  isAlive() {
    if (this.client.connected) {
      return true;
    }
    return false;
  }

  async get(key) {
    const clientGet = promisify(this.client.get).bind(this.client);
    const value = await clientGet(key);
    return value;
  }

  async set(key, value, duration) {
    const clientSetex = promisify(this.client.setex).bind(this.client);
    await clientSetex(key, duration, value);
  }

  async del(key) {
    const clientDel = promisify(this.client.del).bind(this.client);
    await clientDel(key);
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
