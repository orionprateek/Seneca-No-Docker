var Seneca = require('seneca')

Seneca({tag: 'api'})
  .test('print')
  .use('consul-registry', {
    host: '172.23.238.199'
  })
  .use('mesh', {
    bases:['172.23.238.216:39002'],
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  
  .ready(function (){
    var seneca = this
    var express = require('express');
    var app = express();
    app.get('/api/math/:cmd/:left/:right', function(req, res){
      seneca.act(
        {
          role: 'math',
          cmd: req.params.cmd,
          left: Number(req.params.left),
          right: Number(req.params.right)
        },
        function(err, out)
        {
          res.json(err || out)
        }
      )
    })
    app.listen(3000)
  })


