const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');

const controller = require('../../../controllers/productsControllers');


const productsDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje do Encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

describe('Testa a camada controllers', async () => { 
  beforeEach(async () => {
    sinon.stub(db, 'query').resolves([productsDB]);
  }).afterEach(() => {
    db.query.restore();
  }).after(() => {
    db.query.restore();
  }).timeout(0);

  it('Deve retornar todos os produtos', async () => {
    const products = await controller.getProducts();
    expect(products).to.equal(productsDB);
  }).timeout(0);

  it('Deve retornar um produto pelo id', async () => {
    const product = await controller.getById(1);
    expect(product).to.equal(productsDB[0]);
  }).timeout(0);

  it('Deve criar um produto', async () => {
    const product = await controller.addProduct('Martelo de Thor');
    expect(product).to.equal(productsDB[0]);
  }).timeout(0);

  it('Deve atualizar um produto', async () => {
    const affectedRows = await controller.updateProduct(1, 'Martelo de Thor');
    expect(affectedRows).to.equal(1);
  }).timeout(0);

  it('Deve deletar um produto', async () => {
    const affectedRows = await controller.deleteProduct(1);
    expect(affectedRows).to.equal(1);
  }).timeout(0);

  it('Deve retornar um produto pelo nome', async () => {
    const product = await controller.getProductById('Martelo de Thor');
    expect(product).to.equal(productsDB[0]);
  }).timeout(0);
})