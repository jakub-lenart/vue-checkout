const express = require('express'),
  app = express();

app.use('/dist', express.static(__dirname + '/dist'));

// TODO resolve img build config
app.use('/src/assets/img', express.static(__dirname + '/src/assets/img'));

app.set('port', (process.env.PORT || 3000));

app.all('/*', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

var server = app.listen(app.get('port'));
