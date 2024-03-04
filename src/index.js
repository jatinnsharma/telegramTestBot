require('dotenv').config();
const token  = process.env.BOT_TOKEN
const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const app = express()
const bot = new TelegramBot(token, { polling: true });
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.status(200).json({status:true,message:"Welcome to home page"})
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
  
    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot!');
    }  
    if(messageText === '/how'){
        bot.sendMessage(chatId,'Welcome to the bot!');
    }
  });

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})



