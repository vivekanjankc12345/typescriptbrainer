import mongoose, { Schema, Document } from 'mongoose';

export interface ShoppingItem extends Document {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const shoppingSchema: Schema = new Schema({
  image: String,
  name: String,
  price: Number,
  description: String,
  quantity: Number,
});

const ShoppingModel = mongoose.model<ShoppingItem>('shop', shoppingSchema);

export { ShoppingModel };
