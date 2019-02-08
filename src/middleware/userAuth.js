import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function userAuth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({
      status: 401,
      error: 'Unauthorized access to perform this operation',
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(payload.signature)
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: 'Invalid token credentials',
    });
  }
}

export default userAuth;
