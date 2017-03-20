var Seneca = require('seneca')

Seneca({tag: 'sum'})
  .test('print')
  .use('consul-registry', {
    host: '172.23.238.199'
  })
  .use('./sum')
  .use('mesh', {
    pin: 'role:math,cmd:sum',
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
    console.log('sum', seneca.id)
  })


