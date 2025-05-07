import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';

describe('AuthController (e2e)', () => {
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

  it('/auth/register (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@example.com',
      })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.username).toBe('testuser');
  });

  it('/auth/login (POST)', async () => {
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@example.com',
      })
      .expect(201);

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      })
      .expect(200);

    expect(response.body).toHaveProperty('access_token');
  });
});
