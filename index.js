const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middlewares');
const app = require('./app');
require('dotenv').config();
const router = require('./routes');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/products', rescue(router.producRouter));
app.use('/sales', rescue(router.salesRouter));

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
