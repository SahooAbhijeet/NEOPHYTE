const express = require('express');
const {ServerConfig} = require('./config');
const connectToDB = require('./config/database.config');
const apiRoutes = require('./routes');
const {passportAuth} = require('./config/jwt-middleware');
const passport = require('passport');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.use(passport.initialize());
passportAuth(passport);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Server started at  ${ServerConfig.PORT}`);
    await connectToDB();
    console.log('Successfully connected to database');
})