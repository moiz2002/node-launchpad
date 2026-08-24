import { Request, Response } from 'express';
import { ProductService } from './ProductService';

export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService = new ProductService()) {
    this.productService = productService;
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await this.productService.getAllProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const product = await this.productService.getProductById(id);
      res.json(product);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const product = await this.productService.updateProduct(id, req.body);
      res.json(product);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  remove = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await this.productService.deleteProduct(id);
      res.json({ message: 'Product deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}