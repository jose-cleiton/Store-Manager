const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../../models/db');
const salesProducts = require('../../../models/salesProductsModels');
const salesModels= require('../../../models/salesModels');

describe('Camadas de criar novas vendas sales_products', () => { 
  const MOCKED_SALES = [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ];

  const MOCKED_RETURN = {
    "id": 1,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  };

    before(() => {
    const SALE_ID = 1;
    sinon.stub(salesModels, 'creatSelesModel').resolves(SALE_ID);
    sinon.stub(db, 'query').resolves();
  });

  after(() => {
    db.query.restore();
  });
  it('Testando o retorna da função createSalesProducts', async () => { 
    const result = await salesProducts.creatProductModel(MOCKED_SALES);
    expect(result).to.be.an('object');
    expect(result).to.have.a.property('id');
    expect(result).to.have.a.property('itemsSold');
    expect(result.id).to.be.a('number');
    expect(result.itemsSold).to.be.an('array');
    expect(result.id).to.be.equal(1);

    
  })

describe('Preparando o teste para lista por Id', () => {
  const SALE_ID = 1;

  const MOCKED_RETURN = [
    {
      "sale_id": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "product_id": 1,
      "quantity": 2
    },
  ];

  before(() => {
    sinon.stub(db, 'execute').resolves([MOCKED_RETURN]);
  });

  after(() => {
    db.execute.restore();
  });


  it('Testando o retorna da função getSalesProducts', async () => {
    const result = await salesProducts.getAllSalesProductsModel()
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(MOCKED_RETURN);
  
  })
  it('Testando o retorna da função getSalesProductsById', async () => { 
    const result = await salesProducts.getProductsSalesModelById(SALE_ID);
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(MOCKED_RETURN);
  })

  it('Testando o retorna da função deletSalesProductsById', async () => { 
    const result = await salesProducts.deletSalesProductsModelById(SALE_ID);
    expect(db.execute.calledOnce).to.be.false;
    
  })
  it('Testando o retorna da função updatSalesProductsModelById', async () => { 
  const ID = 1;
  const QUANTITY = 2;

    const result = await salesProducts.updatSalesProductsModelById(ID, ID, QUANTITY);
    expect(db.execute.calledOnce).to.be.false;
    
  })
  it('Testando o retorna da função getAllSalesProductsModel', async () => { 
    const result = await salesProducts.getAllSalesProductsModel();
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(MOCKED_RETURN);
  })

})
  

})

