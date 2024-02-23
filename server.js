const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const mime = require('mime-types');

app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/orders', (req, res) => {
  res.sendFile(path.join(__dirname, '/orders.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '/cart.html'));
});

app.get('/message', (req, res) => {
  res.sendFile(path.join(__dirname, '/messages.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '/profile.html'));
});

app.get('/style.css', (req, res) => {
  const filePath = path.join(__dirname, 'style.css');
  const contentType = mime.contentType(path.extname(filePath));
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

app.get('/theme.js', (req, res) => {
  const filePath = path.join(__dirname, 'theme.js');
  const contentType = 'text/javascript';
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

app.get('/script.js', (req, res) => {
  const filePath = path.join(__dirname, 'script.js');
  const contentType = 'text/javascript';
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

app.get('/server.js', (req, res) => {
  const filePath = path.join(__dirname, 'server.js');
  const contentType = 'text/javascript';
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
