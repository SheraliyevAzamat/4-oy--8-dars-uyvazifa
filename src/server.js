import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/userRoutes.js'; 
import productRoutes from './routes/productRoutes.js'; 
import orderRoutes from './routes/orderRoutes.js'; 

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes); 
app.use('/products', productRoutes); 
app.use('/orders', orderRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in running: ${PORT}`);
});
