const env = require('./.env')
const telegraf =  require('telegraf')
const bot = new telegraf(env.token)

bot.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora}\n Tempo de resposta: ${ms}ms`)
})


// evento de recepção de texto 
bot.on('text', ctx => ctx.reply('Alo Mundo SENAI'))

bot.launch()