import express, { Request, Response, Router } from 'express';
import { ShoppingModel, ShoppingItem } from '../Model/Shopingmodel';

const shopDataRouter: Router = express.Router();

shopDataRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { name, category, sortBy, sortOrder, page, limit } = req.query as {
      name: string;
      category: string;
      sortBy: string;
      sortOrder: string;
      page: string;
      limit: string;
    };
    let query: any = {};

    // Searching
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    if (category) {
      query.category = { $regex: category, $options: "i" };
    }

    // Sorting
    let sortOptions: any = {};
    if (sortBy) {
      sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    // Pagination
    const pageNumber: number = parseInt(page) || 1;
    const resultsPerPage: number = parseInt(limit) || 10;
    const skipResults: number = (pageNumber - 1) * resultsPerPage;

    const getShop: ShoppingItem[] = await ShoppingModel
      .find(query)
      .sort(sortOptions)
      .skip(skipResults)
      .limit(resultsPerPage);

    res.status(200).json({
      status: 1,
      data: getShop,
      message: "Data retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      data: err,
      message: "Error occurred while fetching data",
    });
  }
});

export { shopDataRouter };
