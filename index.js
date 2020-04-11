const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

client.on('ready', () => {
  client.user.setGame('idk what I am playing lol')
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.channel.send(`Pong! Latency is **${client.ping} ms** `)
  }
})

client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.channel.send('I am online')
  }
})

client.on('message', msg => {
  if (msg.content === '!secret') {
    msg.channel.send('Do you know one special thing....? I am a BOT!!! :grin:  :grin:  :grin: ')
  }
})

client.on('message', msg => {
  if (msg.content === '!friend') {
    msg.channel.send('Friends forever!')
  }
})

client.on('message', msg => {
  if (msg.content === '!creeper') {
    msg.channel.send('Aw man!!')
  }
})

client.on('message', msg => {
  if (msg.content === '!so we back in the mine') {
    msg.channel.send('Got our pickaxe swinging from side to side')
  }
})


client.login(process.env.BOT_TOKEN)
