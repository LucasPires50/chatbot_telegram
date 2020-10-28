const env = require('./.env')
const telegraf =  require('telegraf')
const bot = new telegraf(env.token)

const gitTelegram = 'http://techcrunch.com/2014/02/24/telegram-saw-8m-downloads-after-whatsapp-got-acquired/'/

bot.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora}\n Tempo de resposta: ${ms}ms`)
})

// diferentes tipos de respostas
bot.start(async ctx => {
    //Resposta texto
    await ctx.reply(`Seja Bem Vindo, ${ctx.message.from.first_name}!:+1:`)

    await ctx.reply(`Veja o video: https://youtu.be/oIM5hljQQaA`)

    // await ctx.replyWithHTML (`Pode ser usado tags <strong>Para negrito</strong ou para <em>Itálico</em>. <a href="https://sc.senai.br">Senai</a> <code>Código</code>`)

    // //resposta com Markdown
    // await ctx.replyWithMarkdown('Dá para escrever "em negrito", _em itálico_ `em código` ou ```bloco de código```, também é possivel Link [SENAI](https://sc.senai.br)')

    //Resposta foto
    await ctx.replyWithPhoto('https://picsum.photos/200/300/?random', {caption: 'Foto Aleátoria'})

    //resposta com localização
    await ctx.replyWithLocation(-27.1165927, -48.9123907)

    //resposta com gif
    await ctx.replyWithAnimation(gitTelegram)

})



bot.launch()