const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');

const UserRouter = require('./routes/user-router');
const WalletRouter = require('./routes/wallet-router');
const ApplicationRouter = require('./routes/application-router');
const ApplicationTokenRouter = require('./routes/application-token-router');
const AuthRouter = require('./routes/auth-router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/dippi/user', UserRouter);
app.use('/dippi/wallet', WalletRouter);
app.use('/dippi/application', ApplicationRouter);
app.use('/dippi/application-token', ApplicationTokenRouter);
app.use('/dippi/auth', AuthRouter);


app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});


app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
