import express from 'express';
import db from './db.js';

const app = express();

app.use(express.json());

app.get('/products', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        res.status(500).send('Error retrieving products');
    }
});

app.post('/products', async (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).send('Name and Price are required');
    }

    try {
        await db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
        res.send('Product added successfully');
    } catch (err) {
        res.status(500).send('Error adding product');
    }
});

const PORT = 3000; // Задайте порт, на котором ваш сервер будет работать
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
