const env = require('./.env')
const telegraf =  require('telegraf')
const bot = new telegraf(env.token)

//escutado o comando /start
bot.start(ctx => {
    const nome = ctx.message.from.first_name + ' ' + ctx.message.from.last_name
    ctx.reply(`Seja bem vindo ${nome}!`)
})

// evento de texto
bot.on('text,', ctx => {
    ctx.reply(`Texto: ${ctx.message.text} recebido com sucesso`)
})

//evento de localização
bot.on('location', ctx => {
    const location = ctx.message.location
    ctx.reply(`Sei que você está na latitude: ${location.latitude} e longitude: ${location.longitude}`)
})

//evento de contato
bot.on('contact', ctx => {
    const contact = ctx.message.contact
    console.log(contact)
    ctx.reply(`Vou guardar o contato de ${contact.first_name} e telefone ${contact.phone_number}`)
})

//evento de voz
bot.on('voice', ctx => {
    const voice = ctx.message.voice
    console.log(voice)
    ctx.reply(`Áudio recebido, ele possui ${voice.duration}s`)

})

//evento de foto
bot.on('photo', ctx => {
    const photo = ctx.message.photo
    console.log(photo)
    photo.forEach((ft, i) => {
        ctx.reply(`Foto ${i} tem rosolução de ${ft.width}x${ft.height}`)
    });
})

// evento de figurinhas
bot.on('sticker', ctx => {
    const sticker = ctx.message.sticker
    console.log(sticker)
    ctx.reply(`Você enviou uma figurinha correspondente ${sticker.emoji} do pacote ${sticker.set_name}`)
})

//evento de animação
bot.on('animation', ctx => {
    const animation = ctx.message.animation
    console.log(animation)
    ctx.reply(`Esta animação dura ${animation.duration}s e o tamanho de arquivo é ${animation.file_size} byte`)
})

//para o bot funbcionar
bot.launch()