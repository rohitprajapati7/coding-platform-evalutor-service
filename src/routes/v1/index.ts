import express from 'express';
const {pingCheck} = require('../../controllers');

const v1Router = express.Router();

v1Router.get('/ping', pingCheck);

export default v1Router;