const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/online-store-frontend'))

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/online-store-frontend/index.html'))
})

app.listen(process.env.PORT || 4200);
