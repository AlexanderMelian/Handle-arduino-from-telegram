const telegraf = require('telegraf');
const bot = new telegraf('');//add the id of the bot
var jf = require("johnny-five");
var circuito = new jf.Board({port:"COM3"});//port of arduino
var estadof1=true;
var estadof2=true;
circuito.on("ready", inicioard);

function inicioard(){
    led1 = new jf.Led(13);
    led1.on();
    led2 = new jf.Led(12);
    led2.on();
    console.log("Working")
    bot.launch();
}
bot.start((ctx) =>{
        ctx.reply('Bienvenido, use el comando -/help- para ver los comandos disponibles');
})
bot.help((ctx)=>{
    ctx.reply('-/prenderf1-/apagarf1');
    ctx.reply('-/prenderf2-/apagarf2');
    ctx.reply('-/estado');
})
bot.command(['Prenderf1','prenderf1'], (ctx) =>{
    led1.on();
    estadof1=true;
    ctx.reply('Led1-ON');
})
bot.command(['Apagarf1','apagarf1'], (ctx) =>{
    led1.off();
    estadof1=false;
    ctx.reply('Led1-OFF');
})
bot.command(['Prenderf2','prenderf2'], (ctx) =>{
    led2.on();
    estadof2=true;
    ctx.reply('Led2-ON');
})
bot.command(['Apagarf2','apagarf2'], (ctx) =>{
    led2.off();
    estadof2=false;
    ctx.reply('Led2-OFF');
})
bot.command(['estado','Estado'], (ctx) =>{
if(estadof1){
    ctx.reply('Led1 Encendido');
}else{
ctx.reply('Led1 Apagado');
}
if(estadof2){
    ctx.reply('Led2 Encendido');
}else{
ctx.reply('Led2 Apagado');
}
})