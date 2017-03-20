var Seneca = require('seneca')

Seneca({tag: 'base'})
  .test('print')
  .use('consul-registry', {
    host: '172.23.238.199'
  })
  .use('mesh', {
    isbase: true,
    host: '@eth0',
    port: 39002,
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
    console.log('base', this.id)
  });
