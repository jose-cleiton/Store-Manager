const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');

const service = require('../../../services/productsServices');

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

describe('Testa a camada services', async () => {
  beforeEach(async () => {
    sinon.stub(db, 'query').resolves([productsDB]);
  }).afterEach(() => {
    db.query.restore();
  }).after(() => {
    db.query.restore();
  }).timeout(0);

  it('Deve retornar todos os produtos', async () => {
    const products = await service.getServices();
    expect(products).to.equal(productsDB);
  }).timeout(0);

  it('Deve retornar um produto pelo id', async () => {
    const product = await service.getByIdServices(1);
    expect(product).to.equal(productsDB[0]);
  }).timeout(0);

  it('Deve criar um produto', async () => {
    const product = await service.addServices('Martelo de Thor');
    expect(product).to.equal(productsDB[0]);
  }).timeout(0);

  it('Deve atualizar um produto', async () => {
    const affectedRows = await service.updateServices(1, 'Martelo de Thor');
    expect(affectedRows).to.equal(1);
  }).timeout(0);

  it('Deve deletar um produto', async () => {
    const affectedRows = await service.deleteServices(1);
    expect(affectedRows).to.equal(1);
  }).timeout(0);

  it('Deve retornar um produto pelo nome', async () => {
    const product = await service.getByIdServicesById('Martelo de Thor');
    expect(product).to.equal(productsDB[0]);
  }).timeout(0);
}
 )