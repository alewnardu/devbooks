import express from 'express';

import booksRoutes from './routes/books.routes.js';
import authorsRoutes from './routes/authors.routes.js';

const app  = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/books', booksRoutes);
app.use('/api/authors', authorsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});