const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');
const nome = 'José Cleiton';
const nome2 = 'José Cleiton Cerqueira Santos'; 
const {
  getModels,
  getByIdModels,
  createModels,
  updateModels,
  deleteModels,
  getModelsById,
} = require('../../../models/productsModels');

const testando =[
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje do Encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

describe('Testando o retorno das funcçoes da camada Model', () => {
  before(async () => {
    sinon.stub(db, 'query').returns(testando);
  })
  after(async () => {
    db.query.restore();
  }
  )


  it('Testando o retorna da função getModels()', async () => {
    const result = await getModels();
    
    expect(result).to.be.an('object');
    expect(result).to.have.a.property('name');
    expect(result).to.have.a.property('id');
    expect(result.name).to.be.a('string');
    expect(result.id).to.be.a('number');
    expect(result.id).to.be.equal(1);
    expect(result.name).to.be.equal('Martelo de Thor');
    
  });
  it('Testando o retorna da função getByIdModels', async () => {
    const result = await getByIdModels(1);
    expect(result).to.be.an('object');
    expect(result).to.have.a.property('name');
    expect(result).to.have.a.property('id');
    expect(result.name).to.be.a('string');
    expect(result.id).to.be.a('number');
    expect(result.id).to.be.equal(1);
    expect(result.name).to.be.equal('Martelo de Thor');
   
  });
  it('Testando o retorna da função createModels', async () => {
    const result = await createModels(nome);
    expect(result).to.be.an('object');
    expect(result).to.have.a.property('name');
    expect(result).to.have.a.property('id');
    expect(result.name).to.be.a('string');
    expect(result.id).to.be.a('number');
    expect(result.name).to.be.equal(nome);
  });
  it('Testando o retorna da função updateModels', async () => {
    const result = await updateModels(1, nome2);
    expect(result).to.be.an('object');
  }
    
  );
  it('Testando o retorna da função deleteModels', async () => {
    const [result] = await deleteModels(1);
    expect(result).to.be.a('object');
    expect(result).to.have.a.property('affectedRows');
    expect(result.affectedRows).to.be.a('number');
   

  })
  it('Testando o retorna da função getModelsById', async () => {
    const [result] = await getModelsById(1);
    expect(result).to.be.an('object');
    expect(result).to.have.a.property('name');
    expect(result).to.have.a.property('id');
    expect(result.name).to.be.a('string');
    expect(result.id).to.be.a('number');
    expect(result.id).to.be.equal(1);
    expect(result.name).to.be.equal('Martelo de Thor');
  
   })
    
});