const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet.hidePoweredBy());
app.use(helmet.xssFilter());
app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4000, () => console.log(`Listening on port 4000`));
