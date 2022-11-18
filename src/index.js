// import { getTelegramMessages } from './telegram.js'
// import { getSide } from './get-side.js'
import { binanceSpotMarketOrder } from './binance.js'

export const tradeETH = async (request, response) => {
  // console.log('*********START*********')
  // console.log('')

  console.log(request.query.side)

  // const messages = await getTelegramMessages()
  // const side = getSide(messages)
  const side = request.query.side || 'NONE'
  await binanceSpotMarketOrder(side)

  console.log('')
  console.log('*********FINISH*********')
  console.log('')
  return response.send('ok')
}
