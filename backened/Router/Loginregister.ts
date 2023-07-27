import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SignUpModel, SignUp } from '../Model/Loginregistermodel';

const userRouter = express.Router();

userRouter.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await SignUpModel.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        status: 0,
        data: "Email already registered",
        message: 'Email already registered',
      });
    }

    bcrypt.hash(password, 5, async (err, secure_password) => {
      if (err) {
        res.status(409).json({
          status: 0,
          data: err,
          message: 'Invalid credentials',
        });
      } else {
        const postregister: SignUp = new SignUpModel({ username, email, password: secure_password });
        await postregister.save();
        console.log(postregister);
        res.json({
          status: 1,
          data: postregister,
          message: 'Register successful',
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      data: null,
      message: 'Internal server error',
    });
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const postlogin: SignUp[] = await SignUpModel.find({ email });
    if (postlogin.length > 0) {
      bcrypt.compare(password, postlogin[0].password, function(err, result) {
        if (result) {
          const token = jwt.sign({ foo: 'bar' }, process.env.key||"", { expiresIn: '1h' });
          res.json({
            status: 1,
            data: { token,postlogin },
            message: 'Login successful',
          });
        } else {
          res.status(401).json({
            status: 0,
            data: err,
            message: 'Invalid credentials',
          });
        }
      });
    } else {
      res.status(401).json({
        status: 0,
        data: null,
        message: 'Invalid credentials',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      data: null,
      message: 'Internal server error',
    });
  }
});

export { userRouter };
