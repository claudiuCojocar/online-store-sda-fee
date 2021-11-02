const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/test-application343'))

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/test-application343/index.html'))
})

app.listen(process.env.PORT || 4200);
