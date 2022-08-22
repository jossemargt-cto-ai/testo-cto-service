const { sdk } = require('@cto.ai/sdk')
const http = require('http')

async function main() {
  const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('lun 22 ago 2022 13:25:54 CST')
    res.end()
  }

  const server = http.createServer(requestListener)
  server.listen(8080, function () {
    sdk.log('server started!')
  })
}
main()
