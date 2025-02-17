import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();
app.use(cors({ origin: true }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});