import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database.js';
import router from './src/api/router.js';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use('/api', router);
app.use(express.static('public'));
connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});