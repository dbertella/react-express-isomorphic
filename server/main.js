const Express = require('express');
const app = new Express();
const parser = require('body-parser');

function render(req, res) {
  res.render('./../app/index.ejs', {});
}

app.get('/', render)
.use(Express.static(__dirname + '/../.temp'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/items.js')(app);
