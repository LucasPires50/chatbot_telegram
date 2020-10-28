const env = require('./.env');
const telegraf = require('telegraf');

const bot = new telegraf(env.token);
const giftTelegram = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif';



//diferentes tipos de respostas 
bot.start(async ctx => {
    await ctx.reply(`Seja Bem vindo,${ctx.message.from.first_name}!`)

    //resposta com video
    await ctx.reply('Veja o video: https://www.youtube.com/watch?v=QeUoxscV8FQ  ${ctx.message.from.fist_name}!')

    // resposta em HTMl
    await ctx.replyWithHTML(`pode ser usar tags html <strong>bem vindo</strong>`)

    // resposta em Markdown
    await ctx.replyWithMarkdown('dá para escrever *em negrito*, _em italico_ `em codifo` ou ```bloco de codigo```.tambem é possivel  link [Senai](https://sc.senai.br)')

    //resposta em foto
    await ctx.replyWithPhoto('https://picsum.photos/200/300/?random',{caption: 'foto aleatoria'})
    
    //resposta com localizção
    await ctx.replyWithLocation(-27.1156927,-48.9123907)
    
    // resposta com gif animado
    await ctx.replyWithAnimation(giftTelegram)
})

bot.launch();