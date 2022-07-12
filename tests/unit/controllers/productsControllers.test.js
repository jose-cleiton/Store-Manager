const { expect } = require('chai');
const sinon = require('sinon');


const productsController = require('../../../controllers/productsControllers');
const productsService = require('../../../services/productsServices');


describe('testando as rotas', () => { 
   const res = {};
  const req = {};
  
  const mockedData = [{
      'id': 1,
      'name': "Martelo de Thor",
  }];

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getByIdServices').resolves(mockedData);
    });
  
 

  it('testando a rota get /products', async () => { 
    await productsController.getController(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  
  })

  it('testando a rota get /products/:id', async () => { 
    const res = {};
    const req = {};

    const mockedData = {
      'id': 1,
      'name': "Martelo de Thor",
    };

    before(() => {
      req.params = { id: 1 };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getByIdServices').resolves(mockedData);
    });

    after(() => {
      productsService.getByIdServices.restore();
    });


    it('testando a rota get /products/:id', async () => {  
      await productsController.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);


    })
    it('testanto o retorno da funcao updateServices', async () => { 
      const result = await productsController.updateController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    })
    it('testando o retorno da funcao deleteServices', async () => { 
      const result = await productsController.deleteController(req, res);
      expect(res.status.calledWith(204)).to.be.true;
    })
    it('testando o retorno da funcao addServices', async () => { 
      const result = await productsController.addController(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    })

    it('testando o retorno da funcao getByIdServices', async () => {
      const result = await productsController.getByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    
     })
  })







});