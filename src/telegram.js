import axios from 'axios'

export const getTelegramMessages = async () => {
  console.log('Step1. Telegram message: Start')

  const url = 'https://api.telegram.org/bot5628574569:AAGMRFybrxAUrqyZCasAOKFjE_yQtBaxyPo/getupdates?offset=-100'

  const newMessageList = await axios(url)
    .then(res => res.data.result)
    .catch(err => [])

  const sortedMessageList = newMessageList
    .map(item => item.message)
    .filter(message => message.from.username === 'johnnybrobot')
    .sort((a, b) => b.date - a.date)

    
  console.log('......Finish')
  console.log('')
  return sortedMessageList
}