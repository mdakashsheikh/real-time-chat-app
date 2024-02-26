require('dotenv').config();
const express = require('express');
const connetToMongo = require('./db/connectToMongo');
const authRoutes = require('./routes/auth.route');
const messageRoutes = require('./routes/message.route');

const PORT = process.env.PORT || 7020
const app = express();

app.use(express.json())

app.use('/api/v1/auth', authRoutes);
app.use('/api/vi/messages', messageRoutes)

connetToMongo()

app.listen(PORT, () => {
    
    console.log(`Listening on PORT ${PORT}`);
})