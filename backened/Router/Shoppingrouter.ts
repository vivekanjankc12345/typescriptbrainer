import express, { Request, Response, Router } from 'express';
import { ShoppingModel, ShoppingItem } from '../Model/Shopingmodel';

const shopRouter: Router = express.Router();

shopRouter.get('/', async (req: Request, res: Response) => {
  try {
    let que = req.query;
    const getShop: ShoppingItem[] = await ShoppingModel.find(que);
    res.status(409).json({
      status: 1,
      data: getShop,
      message: 'Data retrieved successfully',
    });
  } catch (err) {
    res.status(401).json({
      status: 1,
      data: err,
      message: 'Error occurred while fetching data',
    });
  }
});

shopRouter.post('/', async (req: Request, res: Response) => {
  const payload: ShoppingItem = req.body;
  try {
    const postShop: ShoppingItem = new ShoppingModel(payload);
    await postShop.save();
    res.status(409).json({
      status: 1,
      data: postShop,
      message: 'Data Added successfully',
    });
  } catch (err) {
    res.status(401).json({
      status: 0,
      data: err,
      message: 'Error occurred while fetching data',
    });
  }
});

shopRouter.patch('/update/:id', async (req: Request, res: Response) => {
  let id: string = req.params.id;
  let payload: ShoppingItem = req.body;
  try {
    await ShoppingModel.findByIdAndUpdate({ _id: id }, payload);
    res.send();
    res.status(409).json({
      status: 1,
      data: `data update successfully id:${id}`,
      message: 'Data updated successfully',
    });
  } catch (err) {
    res.status(401).json({
      status: 0,
      data: err,
      message: 'Error occurred while updating data',
    });
  }
});

shopRouter.delete('/delete/:id', async (req: Request, res: Response) => {
  let id: string = req.params.id;
  try {
    await ShoppingModel.findByIdAndDelete(id);
    res.status(409).json({
      status: 0,
      data: `data delete successfully id:${id}`,
      message: 'Data deleted successfully',
    });
  } catch (err) {
    res.status(409).json({
      status: 0,
      data: err,
      message: 'Error occurred while deleting data',
    });
  }
});

export { shopRouter };
