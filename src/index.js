const express = require('express');
const {ServerConfig} = require('./config');
const connectToDB = require('./config/database.config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(ServerConfig.PORT, async() => {
    console.log(`Server started at  ${ServerConfig.PORT}`);
    await connectToDB();
    console.log('Successfully connected to database');
})