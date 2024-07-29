import Binance from 'node-binance-api'
import { BINANCE_API_KEY, BINANCE_SECRET_KEY } from './config.js'

const binance = new Binance().options({
  APIKEY: BINANCE_API_KEY,
  APISECRET: BINANCE_SECRET_KEY,
})

export const binanceSpotMarketOrder = async (side) => {
  console.log('Step3. Order Position: Start')

  // get account info
  const BUSDbalance = await getBUSDBalance()
  const ETHPosition = await getPosition()
  const ETHprice = await getETHprice()

  if (ETHPosition === null) return console.log('Result: ETH Position is null')
  const positionSide = getPositionSide(ETHPosition)
  const positionAmount = Math.abs(getPositionAmount(ETHPosition))

  if (ETHprice === 0 || BUSDbalance === 0) return
  if (side === 'NONE') return console.log('Result: Signal not strong enough')
  if (side === 'BUY' && positionSide === 'LONG') return console.log('Result: Position already is LONG')
  if (side === 'SELL' && positionSide === 'SHORT') return console.log('Result: Position already is SHORT')

  let quantity = Math.max(Number((BUSDbalance / ETHprice).toFixed(3)), 0.005) // 0.005 最小單量

  if (positionAmount !== 0) quantity += positionAmount

  // order position
  const apiMap = { BUY: binance.futuresMarketBuy, SELL: binance.futuresMarketSell }
  const res = await apiMap[side]('ETHBUSD', quantity) // symbol, amount, price, params

  console.log(`Result: ${res?.msg || 'Order success!!'}`)
  return true
}

// utils
const getETHprice = async () => {
  const prices = await binance.futuresPrices()
  return Number(prices['ETHBUSD']) || 0
}

const getBUSDBalance = async () => {
  const account = await binance.futuresAccount()
  const target = account.assets.find(item => item.asset === 'BUSD')
  return Number(target.availableBalance) || 0
}

const getPosition = async () => {
  const account = await binance.futuresAccount()
  const target = account.positions.find(item => item.symbol === 'ETHBUSD')
  return target || null
}

const getPositionSide = (position) => {
  const amount = Number(position?.positionAmt) || 0
  if (amount > 0) return 'LONG' 
  if (amount < 0) return 'SHORT' 
  return null
}

const getPositionAmount = (position) => Number(position?.positionAmt) || 0

// test
// binanceSpotMarketOrder('NONE')
// binanceSpotMarketOrder('SELL')
// binanceSpotMarketOrder('BUY')

