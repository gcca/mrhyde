import express = require('express');

import { mongoose_init } from './mrhyde/mongoose';


let app = express();


mongoose_init();


app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});

