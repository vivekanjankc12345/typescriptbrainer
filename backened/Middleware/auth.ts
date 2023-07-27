import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.key||"");
      if(decoded)
      {
        next();
      }
      // Token is valid, continue with the next middleware
     
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        console.log('Token has expired');
        return res.status(409).json({
          status: 0,
          data: "Token has expired",
          message: 'Token has expired',
        });
      } else {
        console.log('Invalid token');
        return res.status(409).json({
          status: 0,
          data: "Invalid token",
          message: 'Invalid token',
        });
      }
    }
  } else {
    console.log('Please login first');
    return res.status(409).json({
      status: 0,
      data: "Please login first",
      message: 'Please login first',
    });
  }
};

export { auth };