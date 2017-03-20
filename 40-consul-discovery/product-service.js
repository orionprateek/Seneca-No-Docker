var Seneca = require('seneca')

Seneca({tag: 'product'})
  .test('print')
  .use('consul-registry', {
    host: '172.23.238.199'
  })
  .use('./product')
  .use('mesh', {
    pin: 'role:math,cmd:product',
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  .ready(function () {
    var seneca = this
    console.log('product', seneca.id)
  })
