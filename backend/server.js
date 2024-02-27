require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connetToMongo = require('./db/connectToMongo');
const authRoutes = require('./routes/auth.route');
const messageRoutes = require('./routes/message.route');
const userRoutes = require('./routes/user.route.js');

const PORT = process.env.PORT || 7020
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/users', userRoutes);

connetToMongo()

app.listen(PORT, () => {
    
    console.log(`Listening on PORT ${PORT}`);
})