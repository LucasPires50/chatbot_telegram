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

// comando start
bot.start(async ctx => {
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    await ctx.reply(`Ola ${from.username}, o seu nome é: ${from.first_name} ${from.last_name}`)
})

bot.on('text', ctx => ctx.reply('Alo Mundo SENAI'))

bot.launch()