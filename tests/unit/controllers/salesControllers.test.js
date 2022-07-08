// const { expect } = require('chai');
// const sinon = require('sinon');


// describe('Testando modelo de vendas na camada de controle', () => {
//   before(async () => {
//     await connection.connect();
//   }).after(async () => {
//     await connection.close();
//   }).beforeEach(async () => {
//     await connection.query('DELETE FROM sales');
//   }).afterEach(async () => {
//     await connection.query('DELETE FROM sales');
//   }).after(async () => {
//     await connection.close();
//   }).timeout(0);

//   it('deve retornar true se as vendas forem criadas', async () => {
//     const sales = {
//       sale_id: 1,
//       date: '2020-01-01',
//       products: [{
//         product_id: 1,
//         quantity: 1,
//       }],
//     };
//     const result = await salesModel.creatSalesModel(sales);
//     expect(result).to.be.true;
//   }).timeout(0);

//   it('deve retornar false se a venda não for criada', async () => {
//     const sales = {
//       sale_id: 1,
//       date: '2020-01-01',
//       products: [{
//         product_id: 1,
//         quantity: 1,
//       }],
//     };
//     const result = await salesModel.creatSalesModel(sales);
//     expect(result).to.be.false;
//   }).timeout(0);

//   it('deve retornar uma array de vendas', async () => {
//     const sales = [{
//       sale_id: 1,
//       date: '2020-01-01',
//       products: [{
//         product_id: 1,
//         quantity: 1,
//       }],
//     }];
//     await salesModel.creatSalesModel(sales[0]);
//     const result = await salesModel.getAllSalesModel();
//     expect(result).to.be.an('array');
//   }).timeout(0);
 
// }).timeout(0);
 