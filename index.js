const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'ult9.falix.gg', // minecraft server ip
  username: 'Amir', // minecraft username
  port: 20005,                
  version: '1.17.1',
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)