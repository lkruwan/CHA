
/* Copyright (C) 2021 Kavishka - Lusifar.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Kavishka - Lusifar
*/

const lusifar = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;



var autoreply_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        autoreply_var = vars.AUTO_REPLY
    });
}
antlch()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'TR') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'EN') ldc = '*කුනුහරුප කියන්න එපා මිතුර*'
if (Config.LANG == 'ML') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'ID') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'PT') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'RU') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'HI') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'ES') ldc = '*DO NOT USE BAD WORD*'

const KKK01 = "ඇයි මොකද"
const KKK02 = "ආසයි තමා" 
const KKK03 = "පල යන්න ගස්තර බල්ලා" 

lusifar.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (autoreply_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex01 = new RegExp('👻KS👻')
        let regex02 = new RegExp('👻ASAYI WAGE👻')
        let regex03 = new RegExp('👻LETS GO👻')
        
      




        if (regex01.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        } 
        else if (regex02.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
         else if (regex03.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
    }
}))

lusifar.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (autoreply_var == 'false' && message.jid !== '905511384572-1616356915@g.us') {
        let regex01 = new RegExp('👻KS👻')
        let regex02 = new RegExp('👻ASAYI WAGE👻')
        let regex03 = new RegExp('👻LETS GO👻')
        
      




        if (regex01.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        } 
        else if (regex02.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
         else if (regex03.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
    }
}))



//new
lusifar.addCommand({on: 'text', fromMe: true, deleteCommand: false}, (async (message, match) => {
    if (autoreply_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex01 = new RegExp('👻KS👻')
        let regex02 = new RegExp('👻ASAYI WAGE👻')
        let regex03 = new RegExp('👻LETS GO👻')
        
      




        if (regex01.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        } 
        else if (regex02.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
         else if (regex03.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
    }
}))

lusifar.addCommand({on: 'text', fromMe: true, deleteCommand: false}, (async (message, match) => {
    if (autoreply_var == 'false' && message.jid !== '905511384572-1616356915@g.us') {
        let regex01 = new RegExp('👻KS👻')
        let regex02 = new RegExp('👻ASAYI WAGE👻')
        let regex03 = new RegExp('👻LETS GO👻')
        
      




        if (regex01.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        } 
        else if (regex02.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
         else if (regex03.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
    }
}))
