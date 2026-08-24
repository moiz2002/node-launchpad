import { prisma } from '../../config/db';

export class ProductRepository {
  async findAll() {
    return prisma.product.findMany();
  }

  async findById(id: number) {
    return prisma.product.findUnique({ where: { id } });
  }

  async create(data: { name: string; price: number; description?: string }) {
    return prisma.product.create({ data });
  }

  async update(id: number, data: Partial<{ name: string; price: number; description?: string }>) {
    return prisma.product.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.product.delete({ where: { id } });
  }
}