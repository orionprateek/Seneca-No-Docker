var Seneca = require('seneca')

Seneca({log: 'silent'})
  .use('consul-registry', {
    host: '172.23.238.199'
  })
  .use('mesh', {
    monitor: true, 
    host: '@eth0',
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })


