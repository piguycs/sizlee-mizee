const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('guildMemberAdd' , member => {
  member.send(`Welcome on the server! Please be aware that we won’t tolerate troll, spam or harassment. Have fun `)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
  }
})

client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('I am online')
  }
})

client.on('message', msg => {
  if (msg.content === '!secret') {
    msg.reply('Do you know one special thing....? I am a BOT!!! :grin:  :grin:  :grin: ')
  }
})

client.on('message', msg => {
  if (msg.content === '!friend') {
    msg.reply('Friends forever!')
  }
})

client.on('message', msg => {
  if (msg.content === '!creeper') {
    msg.reply('Aw Man')
  }
})

client.on('message', msg => {
  if (msg.content === '!so we back in the mine') {
    msg.reply('Got our picaxe swinging from side to side')
  }
})

client.login(process.env.BOT_TOKEN)
