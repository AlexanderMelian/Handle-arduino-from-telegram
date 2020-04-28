const telegraf = require('telegraf');
const bot = new telegraf('');//id bot telegram
var jf = require("johnny-five");
var circuito = new jf.Board({port:"COM3"});//port arduino
var estadof1;
circuito.on("ready", inicioard);

function inicioard(){
    led1 = new jf.Led(13);
    led1.on();
    estadof1=true;
    console.log("Working")
    bot.launch();
}
bot.start((ctx) =>{
        ctx.reply('Welcome');
})
bot.command(['Prenderf1','prenderf1'], (ctx) =>{
    led1.on();
    estadof1=true;
    ctx.reply('Led-ON');
})
bot.command(['Apagarf1','apagarf1'], (ctx) =>{
    led1.off();
    estadof1=false;
    ctx.reply('Led-OFF');
})

bot.command(['estadof1','Estadof1'], (ctx) =>{
if(estadof1){
    ctx.reply('Led1 Encendido');
}else{
ctx.reply('Led1 Apagado');
}
})