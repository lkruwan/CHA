/*powerd by kaviyaah
Lusifar - kavishkaඋස්සම් පලයම් උස්සන් පලයම්.රටට බරකි නුබ 
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
        l_dsc = 'turn on & off *.video* command info'        
        YT_INFO_on = 'YT INFO TURNED ON'
        YT_INFO_off = 'YT INFO TURNED OFF'
    }
   
   
    if (config.LANG == 'ML') {
        l_dsc = 'അംഗങ്ങൾ നൽകിയ മോശം വാക്ക് ഉപയോഗിക്കുമ്പോൾ അവരെ നീക്കം ചെയ്യാൻ'
        YT_INFO_on = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓണാക്കി'
        YT_INFO_off = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓഫാക്കി'
    }
    
    if (config.LANG == 'SI') {
        l_dsc = '.video විධානයේ විස්තර ඔන් ඕෆ් කිරීම'
        YT_INFO_on = '*YT INFO සක්‍රීය වී ඇත*'
        YT_INFO_off = '*YT INFO අක්‍රීය වී ඇත*'
    }

   
    lusifar.addCommand({pattern: 'uinfo ?(.*)', fromMe: true, desc: l_dsc, usage: '.uinfo on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['YT_INFO']: 'false'
                    } 
                });
                await message.sendMessage(YT_INFO_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['YT_INFO']: 'true'
                    } 
                });
                await message.sendMessage(YT_INFO_on)
        }
    }));
