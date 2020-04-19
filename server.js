const express = require('express');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/user/:id/:name/:surname', (req, res) => {
    const page = '/user';
    const pageParams = req.params;

    app.render(req, res, page, pageParams);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) {
      console.log('error');
    }
  });
});
