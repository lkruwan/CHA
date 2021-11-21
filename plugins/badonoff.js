const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var ANTIBAD_on = ''
    var ANTIBAD_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'turn on & off anti-badword To remove members when they use bad words'        
        ANTIBAD_on = 'ʙᴀᴅ ᴡᴏʀᴅ ʀᴇᴍᴏᴠɪɴɢ ɪꜱ ᴛᴜʀɴᴇᴅ ᴏɴ'
        ANTIBAD_off = 'ʙᴀᴅ ᴡᴏʀᴅ ʀᴇᴍᴏᴠɪɴɢ ɪꜱ ᴛᴜʀɴᴇᴅ ᴏꜰꜰ'
    }
   
   
    if (config.LANG == 'ML') {
        l_dsc = 'അംഗങ്ങൾ നൽകിയ മോശം വാക്ക് ഉപയോഗിക്കുമ്പോൾ അവരെ നീക്കം ചെയ്യാൻ'
        ANTIBAD_on = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓണാക്കി'
        ANTIBAD_off = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓഫാക്കി'
    }
    
    if (config.LANG == 'SI') {
        l_dsc = 'anti-badword on කිරීම සහ off කිරීම (නරක වචන භාවිත කළ අය ඉවත් වේ)'
        ANTIBAD_on = '*නරක වචන භාවිත කරන්නන් ඉවත් කිරීම සක්‍රීය වී ඇත*'
        ANTIBAD_off = '*නරක වචන භාවිත කරන්නන් ඉවත් කිරීම අක්‍රීය වී ඇත*'
    }

   
    Asena.addCommand({pattern: 'antibadword ?(.*)', fromMe: true, desc: l_dsc, usage: '.antibadword on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIBAD']: 'false'
                    } 
                });
                await message.sendMessage(ANTIBAD_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIBAD']: 'true'
                    } 
                });
                await message.sendMessage(ANTIBAD_on)
        }
    }));
