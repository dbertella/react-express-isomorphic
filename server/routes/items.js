module.exports = function(app) {
  const items = [{
    name: 'Carote',
  }, {
    name: 'Patate',
  }, {
    name: 'Peperoni',
  }, {
    name: 'Melanzane',
  }, {
    name: 'Lattuga',
  }, {
    name: 'Zucchine',
  }];

  app.route('/api/items')
  .get(function(req, res) {
    res.send(items);
  })
  .post(function(req) {
    const item = req.body;
    items.push(item);
    console.log(items, req.body);
  });
};
