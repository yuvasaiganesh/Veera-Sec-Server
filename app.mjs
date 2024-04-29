import express from "express";
const app = express();
import cors from "cors"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4000;

app.post('/calculate', async(req, res) => {
    console.log(req.body)
    const { principal, rate, time } = await req.body; 
    console.log(principal);
    if (!principal || !rate || !time || isNaN(principal) || isNaN(!rate) || isNaN(!time) || principal<0 || rate<0 || time<0){
        return res.status(400).send({ error: 'All fields are required' });
    }
    if (isNaN(!rate) || isNaN(!time) || principal<0 || rate<0 || time<0){
        return res.status(400).send({ error: 'All fields must be Numbers' });
    }
    if ( principal<0 || rate<0 || time<0){
        return res.status(400).send({ error: 'All fields are greater than Zero' });
    }
    const interest =  (principal * rate * time) / 100;
    res.send({ interest });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
