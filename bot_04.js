const env = require('./.env');
const telegraf = require('telegraf');

const bot = new telegraf(env.token);

//executando o star
bot.start( ctx =>{
    const nome = ctx.message.from.first_name + '-'+ ctx.message.from.last_name
    ctx.reply(`Seja bem vindo ${nome}`)
    ;
})

//evento de texto
bot.on('text',ctx => {
    ctx.reply(`text:${ctx.message.text} recebido com sucesso.`)
});

// evento de localização 
bot.on('location',ctx =>{
    const location = ctx.message.location
    ctx.reply(`Sei que você esta na latitude ${location.latitude} e logitude ${
        location.longitude}`)
})
//evento de contato 
bot.on('contact', ctx =>{
    const contact = ctx.message.contact;
    console.log(contact);
    ctx.reply(`Vou guardar o contato de ${contact.first_name} e telefone ${contact.phone_number}`);
})
//Evento de Voz
bot.on('voice',ctx =>{
    const voice = ctx.message.voice;
    console.log(voice);
})
//evento de foto
bot.on('photo', async ctx =>{

    const photo = ctx.message.photo
    const legend = ctx.message.caption
    console.log(photo)

    for([i,ft] of photo.entries()){    
      await ctx.reply(`foto ${i} tem resolução ${ft.width} x ${ft.height}`)
    }

    ctx.reply(`legenda: ${legend}`)
})
//evento figurinha
bot.on('stricker',ctx =>{

    const figurinha = ctx.message.stricker
    console.log(figurinha)    
    ctx.reply(`voce envio uma figurinha ${figurinha.emoji} do pacote ${figurinha.set_name}`)  
    
    
})
//animação gif animado
bot.on('animation',ctx =>{

    const animacao = ctx.message.animation
    console.log(animacao)    
    ctx.reply(`animação ${animation.duraction} do pacote ${animation.file_size} bytes`)    

})
bot.launch();