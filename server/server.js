const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const authRouter = require('./Router/authRouter');
const mongoose = require('mongoose');
const getSocketServer = require('./socketServer');
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRouter);
app.all('*', (req, res) => {
    res.send('Nothing Is Here');
})
getSocketServer(server);
const PORT = process.env.PORT||5000;
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('database connected');
    })
    .catch((e) => {
        console.log(e)
    })
server.listen(PORT, () => {
    console.log('listening on  ' + PORT);
});