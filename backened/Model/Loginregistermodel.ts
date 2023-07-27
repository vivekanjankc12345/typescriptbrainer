import mongoose, { Schema, Document } from 'mongoose';

export interface SignUp extends Document {
  username: string;
  email: string;
  password: string;
}

const signUpSchema: Schema = new Schema({
  username: String,
  email: String,
  password: String,
});

const SignUpModel = mongoose.model<SignUp>('register', signUpSchema);

export { SignUpModel };
