const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');

const controller = require('../../../controllers/productsControllers');
const service = require('../../../services/productServices');

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
const TXT ='Testa o retorno de funções da camada CONTROLLER relacionadas aos endpoints /products e /products/:id'

describe(TXT, () => {
     beforeEach(sinon.restore);

    beforeEach(() => {
      sinon.stub(service, 'getServices').resolves();
    });

    afterEach(() => {
      service.getAllProductsService.restore();
    });

     const res = {
        status: sinon.stub().callsFake( () => res),
        json: sinon.stub().returns(),
      };

     await controller.getController({}, res);
   chai.expect(res.status.getCall(0).args[0]).to.equal(200);
   chai.expect(res.json.getCall(0).args[0]).to.be.an('array');
   chai.expect(res.json.getCall(0).args[0]).to.have.lengthOf(3);
   chai.expect(res.json.getCall(0).args[0][0]).to.have.property('id');
   chai.expect(res.json.getCall(0).args[0][0]).to.have.property('name');
   
   it('Deve retornar um array de objetos com todos os produtos', async () => { 
      const result = await controller.getController({}, res);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(3);
      expect(result[0]).to.have.property('id');
      expect(result[0]).to.have.property('name');
   })

   it('Deve retornar um objeto com um produto específico', async () => {
      const result = await controller.getController({ id: 1 }, res);
      expect(result).to.be.an('object');
      expect(result).to.have.property('id');
      expect(result).to.have.property('name');
   })
 })



 
   
 


  
  
