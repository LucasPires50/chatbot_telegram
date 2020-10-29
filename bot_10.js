const env = require('./.env')
const telegraf = require('telegraf')
const Axios = require('axios')
const Fs = require('fs')
const Path = require('path')
const downloadImage = require('./downloadImage')

// inicialização do bot
const bot = new telegraf(env.token)


bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora}\n Tempo de resposta: ${ms}ms`)
})


// evento de recepção de texto 
bot.on('text', ctx => ctx.reply('Envie uma imagem'))
bot.start(ctx => ctx.reply('Envie uma imagem'))

// evento de fotos
bot.on('photo', async ctx => {
    const photo = ctx.message.photo
    const caption = ctx.message.caption

    console.log(`Quantidade de arquivos gerados: ${photo.length}`)

    //is da foto de mais baixa resolução
    const id = photo[0].file_id
    const res = await Axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    const url = `${env.apiFileUrl}/${res.data.result.file_path}`
    const file_unique_id = res.data.result.file_unique_id

    // baixando o arquivo localmente
    await downloadImage(url, file_unique_id)

    //responde com o arquivo local
    const source = Path.resolve(__dirname, 'img', `${file_unique_id}.jpg`)

    console.log(source)

    await ctx.replyWithPhoto({ source: Fs.createReadStream(source) },
        { caption })
})

bot.launch()