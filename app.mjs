import express from "express";
const app = express();
import cors from "cors"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4000;

app.get('/calculate', (req, res) => {
    
    const { principal, rate, time } =  req.query; 
    
    if (!principal || !rate || !time ){
        return res.status(400).send({ error: 'All fields are required' });
    }
    else if (isNaN(rate) || isNaN(time) || isNaN(principal) ){
        return res.status(400).send({ error: 'All fields must be Numbers' });
    }
    else if ( principal<1 || rate<1 || time<1){
        console.log(time)
        return res.status(400).send({ error: 'All fields must be greater than Zero' });
    }
    else{const interest =  (principal * rate * time) / 100;
    res.send({ interest });}
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
