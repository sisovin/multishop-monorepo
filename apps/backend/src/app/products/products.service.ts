import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      return null;
    }
    const updatedProduct = {
      ...this.products[productIndex],
      ...updateProductDto,
    };
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  remove(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
