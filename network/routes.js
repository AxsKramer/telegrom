const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function(app){
  app.use('/message', message);
  app.use('/user', user);
  app.use('/chat', chat);
}

module.exports = routes;