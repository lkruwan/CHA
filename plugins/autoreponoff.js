const lusifar = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var AUTOREP_on = ''
    var AUTOREP_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'turn on & off Autoreply massages'        
        AUTOREP_on = 'Autoreply massage turned on'
        AUTOREP_off = 'Autoreply massage turned off'
    }
   
   
    if (config.LANG == 'ML') {
        l_dsc = 'turn on & off Autoreply massages'        
        AUTOREP_on = 'Autoreply massage turned on'
        AUTOREP_off = 'Autoreply massage turned off'
    }
    
    if (config.LANG == 'SI') {
        l_dsc = 'anti-badword on කිරීම සහ off කිරීම (නරක වචන භාවිත කළ අය ඉවත් වේ)'
        AUTOREP_on = '*ස්වයංකාර පණිවිඩ ක්‍රමය සක්‍රීය වී ඇත*'
        AUTOREP_off = '*ස්වයංකාර පණිවිඩ ක්‍රමය අක්‍රීය වී ඇත*'
    }

   
    lusifar.addCommand({pattern: 'autoreply ?(.*)', fromMe: true, desc: l_dsc, usage: '.autoreply on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_REPLY']: 'false'
                    } 
                });
                await message.sendMessage(AUTOREP_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_REPLY']: 'true'
                    } 
                });
                await message.sendMessage(AUTOREP_on)
        }
    }));
