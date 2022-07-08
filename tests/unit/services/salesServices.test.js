const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../helpers/connection');
const { runSeed, connect } = require('./_utils');
const frisby = require("frisby");
const { allProductsResponse } = require('./_dataMock');
require("dotenv").config();


describe('Teste de modelo de vendas', () => { 
  beforeAll(async () => await runSeed());
  afterAll(async () => await connect().end());

  it('deve retornar true se as vendas forem criadas', async () => {
    const sales = {
      sale_id: 1,
      date: '2020-01-01',
      products: [{
        product_id: 1,
        quantity: 1,
      }],
    };
    const result = await salesModel.creatSalesModel(sales);
    expect(result).to.be.true;
  }).timeout(0);

  it('deve retornar false se a venda não for criada', async () => {
    const sales = {
      sale_id: 1,
      date: '2020-01-01',
      products: [{
        product_id: 1,
        quantity: 1,
      }],
    };
    const result = await salesModel.creatSalesModel(sales);
    expect(result).to.be.false;
  }).timeout(0);

  it('deve retornar uma array de vendas', async () => {
    const sales = [{
      sale_id: 1,
      date: '2020-01-01',
      products: [{
        product_id: 1,
        quantity: 1,
      }],
    }];
    await salesModel.creatSalesModel(sales[0]);
    const result = await salesModel.getAllSalesModel();
    expect(result).to.be.an('array');
  }).timeout(0);

  
})