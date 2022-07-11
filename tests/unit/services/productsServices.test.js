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
describe('Testa o retorno de funções da camada SERVICE relacionadas aos endpoints /products e /products/:id', () => {
  before(async () => {
    sinon.stub(connection, 'execute').returns(productsDB);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Deve retornar um array de objetos com todos os produtos', async () => {
    const result = await service.getProducts();
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(3);
    expect(result[0]).to.have.property('id');
    expect(result[0]).to.have.property('name');
  });

  it('Deve retornar um objeto com um produto específico', async () => {
    const result = await service.getProductById(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  });

  it('Test a função getServices()', async () => {
    const result = await service.getServices();
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(3);
    expect(result[0]).to.have.property('id');
    expect(result[0]).to.have.property('name');
  });

  it('Testa a função createServices()', async () => {
    const result = await service.createService('Martelo de Thor');
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  });

  it('Testa a função updateServices()', async () => {
    const result = await service.updateService(1, 'Martelo de Thor');
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  })

  it('Testa a função deleteServices()', async () => {
    const result = await service.deleteService(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  })

  it('Testa a função getServices()', async () => {
    const result = await service.getServiceById(1);
    expect(result).to.be.an('object');
  
  })

  it('Testa a função getByIdServices()', async () => {
    const result = await service.getByIdServices(1);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
 
  })
  
  it('Testa a função addServices()', async () => {
    const result = await service.addServices('Martelo de Thor');
    expect(result).to.be.an('object');
  })
  
  it('Testa a função updateServices()', async () => {
    const result = await service.updateServices(1, 'Martelo de Thor');
    expect(result).to.be.an('object');

  })
  
  it('Testa a função deleteServices()', async () => {
    const result = await service.deleteServices(1);
    expect(result).to.be.an('object');
  })


});