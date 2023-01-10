const http = require('http')
const { URL } = require('url')

const routes = require('./routes')

// criando servidor
const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`)
  // Método GET | Endpoint /
  console.log(
    `Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`
  )

  let { pathname } = parsedUrl
  let id = null

  // Retirando a barra do endpoint com o split, e retirando o '' com o filter.
  const splitEndPoint = pathname.split('/').filter(Boolean)
  console.log(splitEndPoint)

  // apenas 2 elementos do array, sendo o 1, o id
  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`
    id = splitEndPoint[1]
  }

  const route = routes.find(
    routeObj =>
      routeObj.endpoint === pathname && routeObj.method === request.method
  )

  if (route) {
    //Novo método de transformar em objeto os Query Params
    request.query = Object.fromEntries(parsedUrl.searchParams)
    request.params = { id }

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(body))
    }

    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  }
})

server.listen(3000, () =>
  console.log('🔥 Server started at http://localhost:3000')
)
