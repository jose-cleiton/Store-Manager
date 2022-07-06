const bodyParser = require('body-parser');
const { errorHandler } = require('./middlewares');
const app = require('./app');
require('dotenv').config();

app.use(bodyParser.json());

app.use('/products', require('./routes/routes'));

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
