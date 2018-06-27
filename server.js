//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/iyfdemo'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/iyfdemo/index.html'));
});

// Start the app by listening on the default Heroku port
if (process.env.NODE_ENV == 'production') {
  app.use(function (req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "http") {
      return res.redirect(301, 'https://' + req.host + req.url);
    } else {
      return next();
    }
  });
} else {
  app.use(function (req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
    if (!req.secure) {
      return res.redirect(301, 'https://' + req.host + ":" + process.env.PORT + req.url);
    } else {
      return next();
    }
  });
}

app.listen(process.env.PORT || 8090);
