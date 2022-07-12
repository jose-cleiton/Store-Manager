const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');

const {
  getServices,
  getByIdServices,
  addServices,
  updateServices,
  deleteServices,
  getByIdServicesById,
} = require('../../../services/productsServices');

const testando = [
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
const NOME = 'José Cleiton';

describe('Testando o serviço de produtos', () => { 
    before(async () => {
    sinon.stub(db, 'execute').returns(testando);
  });

  after(async () => {
    db.execute.restore();
  });

  it('Testanto o retorno da função getServices', async () => { 
    const [result] = await getServices();
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');


  })
  it('Testando o retorno da função getByIdServices', async () => { 
    const [result] = await getByIdServices(2);
    expect(result).to.be.a('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('name');   
  })
  it('Testando o retorno da função addServices', async () => {
    const result = await addServices(NOME);
    expect(result).to.be.a('object');    
    expect(result).to.have.property('name');
    expect(result).to.have.property('id');

  
  })
  it('Testando o retorno da função updateServices', async () => {
    const result = await updateServices(2, NOME);
    expect(result).to.be.a('object');    
    expect(result).to.have.property('name');
    expect(result).to.have.property('id');

  
  
  })
  it('Testando o retorno da função deleteServices', async () => { 
    const [result] = await deleteServices(2);
    expect(result).to.be.a('object');    
   

  
  })
  it('Testando o retorno da função getByIdServicesById', async () => { 
    const [result] = await getByIdServicesById(2);
   
  
  })
 
   

  


})
