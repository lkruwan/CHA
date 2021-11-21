/*powerd by kaviyaah
Lusifar - kavishka
*/


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
    var YT_INFO_on = ''
    var YT_INFO_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'turn on & off autosticker'        
        YT_INFO_on = 'Auto sticker turned on'
        YT_INFO_off = 'Auto sticker turned off'
    }
   
   
    if (config.LANG == 'ML') {
        l_dsc = 'അംഗങ്ങൾ നൽകിയ മോശം വാക്ക് ഉപയോഗിക്കുമ്പോൾ അവരെ നീക്കം ചെയ്യാൻ'
        YT_INFO_on = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓണാക്കി'
        YT_INFO_off = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓഫാക്കി'
    }
    
    if (config.LANG == 'SI') {
        l_dsc = ' turn on & off autosticker'
        YT_INFO_on = '*Auto sticker turned on*'
        YT_INFO_off = '*Auto sticker turned off*'
    }

   
    lusifar.addCommand({pattern: 'autosticker ?(.*)', fromMe: true, desc: l_dsc, usage: '.autosticker on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'false'
                    } 
                });
                await message.sendMessage(YT_INFO_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'true'
                    } 
                });
                await message.sendMessage(YT_INFO_on)
        }
    }));
