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

describe('Testa a camada controlers/productsControllers', () => { 
  describe('Testa o método getAllProducts', () => {
    it('Deve retornar um array de produtos', async () => {
      const getAllProducts = sinon.stub(db, 'query');
      getAllProducts.returns(Promise.resolve([productsDB]));
      const result = await controller.getAllProducts();
      expect(result).to.be.eql(productsDB);
      getAllProducts.restore();
    }).timeout(1000);
  }).timeout(1000);

  
    it('Deve retornar um produto', async () => {
      const getProductById = sinon.stub(db, 'query');
      getProductById.returns(Promise.resolve([productsDB[0]]));
      const result = await controller.getProductById(1);
      expect(result).to.be.eql(productsDB[0]);
      getProductById.restore();
    }).timeout(1000);
  }).timeout(1000);

 
    it('Deve retornar um produto', async () => {
      const createProduct = sinon.stub(db, 'execute');
      createProduct.returns(Promise.resolve([{ insertId: 1 }]));
      const result = await controller.createProduct({ name: 'Martelo de Thor' });
      expect(result).to.be.eql({ insertId: 1 });
      createProduct.restore();
    }).timeout(1000);
  
  
    it('Deve retornar um produto', async () => {
      const updateProduct = sinon.stub(db, 'execute');
      updateProduct.returns(Promise.resolve([1]));
      const result = await controller.updateProduct(1, { name: 'Martelo de Thor' });
      expect(result).to.be.eql(1);
      updateProduct.restore();
    

     
})