const db = require('../data/dbConfig');
const server = require('./server');
const request = require('supertest');

test('sanity', () => {
  expect(true).toBe(true);
})

test('check env var', async () => {
  expect(process.env.NODE_ENV).toBe('testing');
})

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
})

beforeEach(async () => {
  await db('users').truncate();
})

afterAll(async () => {
  await db.destroy();
})

describe('HTTP tests', () => {
  test('API is running', async () => {
    let res = await request(server).get('/');
    expect(res).toBeDefined();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ api: 'up' });
  })
})
