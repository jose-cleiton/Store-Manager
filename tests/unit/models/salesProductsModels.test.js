const { expect } = require('chai');
const sinon = require('sinon');

const db = require('../../../models/db');
const salesModel = require('../../../models/salesModels');
describe('Sales Models', () => {

  before(() => {
    const execute = [{ insertId }];
    sinon.stub(db, 'execute').resolves(execute);
  });

  after(() => {
    db.execute.restore();
  });

  
  it('Deve retornar um array de vendas', async () => {
    const getAllSales = sinon.stub(db, 'query');
    getAllSales.returns(Promise.resolve([salesDB]));
    const result = await salesModel.getAllSales();
    expect(result).to.be.eql(salesDB);
    getAllSales.restore();
  }).timeout(1000);

  it('Deve retornar uma venda', async () => {
    const getSalesById = sinon.stub(db, 'query');
    getSalesById.returns(Promise.resolve([salesDB[0]]));
    const result = await salesModel.getSalesById(1);
    expect(result).to.be.eql(salesDB[0]);
    getSalesById.restore();
  }).timeout(1000);

  it('retorna venda com id correspondente', async () => {
    const getSalesById = sinon.stub(db, 'query');
    getSalesById.returns(Promise.resolve([salesDB[0]]));
    const result = await salesModel.getSalesById(1);
    expect(result).to.be.eql(salesDB[0]);
    getSalesById.restore();
  }).timeout(1000);

   



  it('Deve retornar uma venda', async () => {
    const getSalesById = sinon.stub(db, 'query');
    getSalesById.returns(Promise.resolve([salesDB[0]]));
    const result = await salesModel.getSalesById(1);
    expect(result).to.be.eql(salesDB[0]);
    getSalesById.restore();
  }).timeout(1000);
});
