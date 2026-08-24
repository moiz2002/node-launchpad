import { ProductRepository } from './ProductRepository';

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository = new ProductRepository()) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return this.productRepository.findAll();
  }

  async getProductById(id: number) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async createProduct(data: { name: string; price: number; description?: string }) {
    if (data.price <= 0) {
      throw new Error('Price must be greater than 0');
    }
    return this.productRepository.create(data);
  }

  async updateProduct(id: number, data: Partial<{ name: string; price: number; description?: string }>) {
    await this.getProductById(id);
    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: number) {
    await this.getProductById(id);
    return this.productRepository.delete(id);
  }
}