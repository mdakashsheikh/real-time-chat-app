require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/auth.route');
const connetToMongo = require('./db/connectToMongo');

const PORT = process.env.PORT || 7020
const app = express();

app.use(express.json())

app.use('/api/v1/auth', authRouter);

connetToMongo()

app.listen(PORT, () => {
    
    console.log(`Listening on PORT ${PORT}`);
})