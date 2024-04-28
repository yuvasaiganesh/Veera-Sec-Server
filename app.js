const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.post('/calculate/', (req, res) => {
    const { principal, rate, time } = req.body;
   
    
    if (!principal || !rate || !time || principal < 0 || rate < 0 || time < 0) {
        return res.send({ error: 'Invalid input values' });
    }
    const interest = (principal * rate * time) / 100;
    console.log('Interest calculated:', interest);
    res.send({ interest });
});

app.listen(5000, () => console.log(`Server running on port 5000`));



