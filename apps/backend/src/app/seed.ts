import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Electronics', description: 'Electronic gadgets and devices' },
      { name: 'Books', description: 'Books of various genres' },
      { name: 'Clothing', description: 'Men and Women clothing' },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        username: 'john_doe',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
      {
        username: 'jane_doe',
        password: 'password123',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
      },
    ],
  });

  await prisma.order.createMany({
    data: [
      {
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        product: 'Smartphone',
        totalAmount: 699.99,
      },
      {
        customerName: 'Jane Doe',
        customerEmail: 'jane.doe@example.com',
        product: 'Novel',
        totalAmount: 19.99,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
