const express = require('express');
const {signUp, logIn} = require('../../controllers/user-controller');
const {authenticate} = require('../../middlewares/authenticate');
const {InfoController} = require('../../controllers');

const v1Router = express.Router();

v1Router.get('/info', InfoController.info)
v1Router.post('/signup', signUp); 
v1Router.post('/login', logIn);

module.exports = v1Router;