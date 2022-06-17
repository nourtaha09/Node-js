const http = require('http')

const url = "http://data.streetfoodapp.com/1.1/schedule/vancouver/"

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk
    })
    response.on('end', () => {
        console.log(data)
    })
    response.on('error', (err) => {
        console.log(err)
    })
})

request.end()