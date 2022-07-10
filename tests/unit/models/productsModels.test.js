const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');

const models = require('../../../models/productsModels');

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

describe('Testa o retorno de funções da camada MODEL relacionadas aos endpoints /products e /products/:id', () => {
  before(async () => {
    sinon.stub(connection, 'execute').returns(productsDB);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Deve retornar um array de objetos com todos os produtos', async () => {
    const result = await models.getProducts();
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(3);
    expect(result[0]).to.have.property('id');
    expect(result[0]).to.have.property('name');
  })

  it('Deve retornar um objeto com um produto específico', async () => {
    const result = await models.getProductById(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  })

  it('Testa a funcao createModels()', async () => {
    const result = await models.createProduct('Martelo de Thor');
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  })
  
  it('Testa a funcao updateModels()', async () => {
    const result = await models.updateProduct(1, 'Martelo de Thor');
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');

  })
  it('Testa a funcao deleteModels()', async () => {
    const result = await models.deleteProduct(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  
  })
  
  it('Testa a funcao getModelsById()', async () => {
    const result = await models.getProductById(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  })

  it('Testa a funcao getModelsById()', async () => { 
    const result = await models.getProductById(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  })

});

  