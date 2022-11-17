import { getTelegramMessages } from './telegram.js'
import { getSide } from './get-side.js'
import { binanceSpotMarketOrder } from './binance.js'

export const tradeETH = async (request, response) => {
  console.log('*********START*********')
  console.log('')

  const messages = await getTelegramMessages()
  const side = getSide(messages)
  // await binanceSpotMarketOrder(side)  
  await binanceSpotMarketOrder('NONE')  

  console.log('')
  console.log('*********FINISH*********')
  console.log('')
  return response.send('ok')
}
