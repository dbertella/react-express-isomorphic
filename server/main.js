const Express = require('express');
const app = new Express();

function render(req, res) {
  res.render('./../app/index.ejs', {});
}

app.get('/', render)
.use(Express.static(__dirname + '/../.temp'))
.listen(7777);
