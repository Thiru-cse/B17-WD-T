import express from 'express';
import employeeRouter from './Routers/employeeRouter.js';

const app = express();
const PORT = 4002;
app.use(express.json());

app.use("/api", employeeRouter);

app.get('/', (req, res)=>{res.status(200).send('API is Working')});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})