const extractToken = (req) => {
  const token = req.headers['x-token'];
  return token;
};

export default extractToken;
