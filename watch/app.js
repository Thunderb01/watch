import { is_alive } from './utils'
import { TIMEOUT_INTERVAL } from './utils/constants'

App({
  globalData: {},
  onCreate(options) {
    console.log('app on create invoke');
    setInterval(is_alive, TIMEOUT_INTERVAL, {});
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
  }
})
