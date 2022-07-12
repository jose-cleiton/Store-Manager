const { expect } = require('chai');
const sinon = require('sinon');

const db = require('../../../models/db');

const {
creatSelesModel,
getByIdSalesModel,
} = require('../../../models/salesModels');


describe('Camadas de criar novas vendas', () => { 
  const insertId = 1;
 before(() => {
    const execute = [{ insertId }];
    sinon.stub(db, 'execute').resolves(execute);
  });

  after(() => {
    db.execute.restore();
  });

  it('Testando o retorna da função creatSelesModel()', async () => { 
    const result = await creatSelesModel();
    expect(result).to.be.equal(insertId);

    
  })
  
  it('Testando o retorna da função getByIdSalesModel()', async () => { 
    const result = await getByIdSalesModel(insertId);
    expect(result).to.be.an('object');
  })



})