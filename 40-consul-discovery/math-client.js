var Seneca = require('seneca')

Seneca({tag: 'client', log: 'silent'})
  .use('consul-registry', {
    host: '172.23.238.199'
  })
  .use('mesh', {
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  .act(
  {
    role: 'math',
    cmd: 'sum',
    left: '3',
    right: '4'
  },
    function (err, out) {
      console.log(err && err.message || out.sum)
      this.close()
    })
   .act(
  {
    role: 'math',
    cmd: 'product',
    left: 3,
    right: 4
  },
    function (err, out) {
      console.log(err && err.message || out.product)
      this.close()
    })



