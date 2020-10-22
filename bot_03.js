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
    if(from.username === "LucasAP50"){
        await ctx.reply(`Ola ${from.username}, o seu nome é: ${from.first_name} ${from.last_name}`)
    }else{
        await ctx.reply('Não estou autorizado a conversar com estranho')
    }
})

bot.on('text', ctx => ctx.reply('Alo Mundo SENAI'))

//evento de localização
bot.on('location', async ctx => {
    const location = ctx.message.location
    console.log(location)
    const lat = location.latitude
    const lon = location.longitude
    await ctx.reply(`https://www.google.com.br/maps/@${lat},${lon},17z`)
    await ctx.replyWithLocation(lat,lon)
    await ctx.reply(`Legal parça! Você esta em Lat: ${lat} - lon ${lon}`)
    
})

bot.launch()