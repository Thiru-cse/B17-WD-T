import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hi My Dear Team, We will become a FSD Developer soon!'});
})

app.get('/products', (req, res) => {
    res.status(200).json({ message: 'Products API', data: [{id: 1, name: 'Mobile'}, {id: 2, name: 'laptop'}] });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})