import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended';
import prisma from '@src/lib/prisma/prismaClient';

jest.mock('@src/lib/prisma/prismaClient', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

const prismaMock = (prisma as unknown) as MockProxy<PrismaClient>;

beforeEach(() => {
  mockReset(prismaMock);
});

export default prismaMock;
