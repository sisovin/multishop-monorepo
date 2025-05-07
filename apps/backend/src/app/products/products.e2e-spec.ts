import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

describe('ProductsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/products (POST)', () => {
    const createProductDto: CreateProductDto = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      category: 'Test Category',
      imageUrl: 'http://example.com/test-product.jpg',
      stock: 10,
    };

    return request(app.getHttpServer())
      .post('/products')
      .send(createProductDto)
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toEqual(createProductDto.name);
        expect(res.body.description).toEqual(createProductDto.description);
        expect(res.body.price).toEqual(createProductDto.price);
        expect(res.body.category).toEqual(createProductDto.category);
        expect(res.body.imageUrl).toEqual(createProductDto.imageUrl);
        expect(res.body.stock).toEqual(createProductDto.stock);
      });
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  it('/products/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/products/1')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toEqual(1);
      });
  });

  it('/products/:id (PATCH)', () => {
    const updateProductDto: UpdateProductDto = {
      name: 'Updated Test Product',
    };

    return request(app.getHttpServer())
      .patch('/products/1')
      .send(updateProductDto)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toEqual(updateProductDto.name);
      });
  });

  it('/products/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/products/1')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({});
      });
  });
});
