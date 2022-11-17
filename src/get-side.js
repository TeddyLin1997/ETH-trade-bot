
export const getSide = (messages) => {
  console.log('Step2. Get Side: Start')

  let side = 'NONE'
  messages.some(item => {
    if (item.message.text.includes('long')) return side = 'BUY'
    if (item.message.text.includes('short')) return side = 'SELL'
    return false
  })

  console.log('......Finish')
  console.log('')
  return side //BUY | SELL | NONE
}