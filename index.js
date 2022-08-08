const { sdk } = require('@cto.ai/sdk')
const http = require('http')

async function main() {
  const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('lun 08 ago 2022 11:43:08 CST')
    res.end()
  }

  const server = http.createServer(requestListener)
  server.listen(8080, function () {
    sdk.log('server started!')
  })
}
main()
