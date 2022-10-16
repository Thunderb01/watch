import { MessageBuilder } from '../shared/message-side'
import Web3 from Web3
const messageBuilder = new MessageBuilder()
const web3 = new Web3()

AppSideService({
  onInit() {
    // establish connection
    console.log('app side service invoke onInit')
    console.log(web3);
    messageBuilder.listen(() => {})
    messageBuilder.on('request', (ctx) => {
      const payload = messageBuilder.buf2Json(ctx.request.payload)
      const { method, params } = payload
      
      if (method === 'GET' && !payload.alive) {
        console.log('not alive signal recieved -- minting an NFT')
        ctx.response({
          data: { result : 200 }
        })
        meta = {
          name: localStorage.getItem('name'),
          tokenId: 0,
          image: localStorage.getItem('message_url'),
          description: localStorage.getItem('description'),
        }
        // btoa(JSON.stringify(meta))

      }
    })
  },
  onRun() {
    console.log('app side service invoke onRun')
  },
  onDestroy() {
    console.log('app side service invoke onDestroy')
  }
})