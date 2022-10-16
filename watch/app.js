import { is_alive } from './utils'
import { TIMEOUT_INTERVAL_BG } from './utils/constants'
import { MessageBuilder } from './shared/message'

// need to pass in the appId
const appId = 27280
const messageBuilder = new MessageBuilder({ appId })

App({
  globalData: {
    messageBuilder: messageBuilder,
  },
  onCreate(options) {
    console.log('app on create invoke')
    // init global state variable
    let alive = true
    // establish connection
    messageBuilder.connect()
    setInterval(is_alive, TIMEOUT_INTERVAL_BG, {messageBuilder: messageBuilder});
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
    messageBuilder.disConnect()
  }
})