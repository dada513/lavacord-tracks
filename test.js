const tracksearch = require('./esm')

async function main () {
  console.log(
    await tracksearch.getSongs('ytsearch:hello there', {
      host: '127.0.0.1',
      port: '2333',
      password: 'youshallnotpass'
    })
  )
}

main()
