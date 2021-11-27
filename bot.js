
/* Copyright (C) 2020 Kavishka Sandaruwan
RECODDED BY KAVISHKA
*/

const os = require("os");
const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const {WAConnection, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./QueenAlexa/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const axios = require('axios');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
    const conn = new WAConnection();
    conn.version = [2,2140,12];
    const Session = new StringSession();

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('⦁═Queen 👸 Alexa═⦁')}${chalk.blue.bold('Bot')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please wait.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('⦁═Queen 👸 Alexa═⦁ 𝚠𝚘𝚛𝚔𝚒𝚗𝚐 ' + config.WORKTYPE + ' 𝚗𝚘𝚠 👻'));
            await conn.sendMessage(conn.user.jid, "⦁═Queen 👸 Alexa═⦁ ɪꜱ ᴀʟʟ ꜱᴇᴛ", MessageType.text);
            await conn.sendMessage(conn.user.jid, "``` WORKING " + config.WORKTYPE + "```" , MessageType.text);
    });
    
    
    //new update fixing test
    
    
    
            if (config.WORKTYPE == 'public') {
            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                if (config.BRANCH == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*LUSIFAR As Public! *\n\n_මෙය ඔබගේ LOG අංකයයි..මෙහි විධාන භාවිතයෙන් වළකින්න._\n_ඔබට පුලුවන් වෙනත් ඕනෑම කතා බහක විධාන භාවිතා කිරීමට.. :)_\n\n*ඔබේ Bot Public ආකාරයට ක්‍රියා කරයි..එය වෙනස් කිරීමට* _.setvar WORK_TYPE:private_ *විධානය භාවිතා කරන්න.*\n\n*\n*LUSIFAR භාවිතා කිරීම සම්බන්ධයෙන් ස්තූතියි 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```🛡️යතාවත්කාලීන කිරීමට``` *.update now* ```භාවිතා කරන්න.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.BRANCH == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*LUSIFAR Working As public!*\n\nPlease do not try any commands here. This is your log number._\n_You can try commands anywhere else :)_\n\n_Your bot in Public Mode. To change, use_ ```.setvar WORK_TYPE:private``` _command._\n\n*Thanks for using LUSIFAR💌*\n', MessageType.text);
                }               
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        '```🛡️Type``` *.update now* ```for update.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == 'private') { 
            if (config.LANG == 'SI' || config.LANG == 'AZ') { 
                if (config.BRANCH == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*LUSIFAR As private! *\n\n_මෙය ඔබගේ LOG අංකයයි..මෙහි විධාන භාවිතයෙන් වළකින්න._\n_ඔබට පුලුවන් වෙනත් ඕනෑම කතා බහක විධාන භාවිතා කිරීමට.. :)_\n\n*ඔබේ Bot Private ආකාරයට ක්‍රියා කරයි..එය වෙනස් කිරීමට* _.setvar WORK_TYPE:public_ *විධානය භාවිතා කරන්න.*\n\n*LUSIFAR භාවිතා කිරීම සම්බන්ධයෙන් ස්තූතියි 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```යතාවත්කාලීන කිරීමට``` *.update now* ```භාවිතා කරන්න.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.BRANCH == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*LUSIFAR Working As private!*\n\nPlease do not try any commands here. This is your log number._\n_You can try commands anywhere else :)_\n\n_Your bot in private  Mode. To change, use_ ```.setvar WORK_TYPE:public or .work public``` _command._\n\n*Thanks for using LUSIFAR💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var TEENU = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            TEENU += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```🛡️යාවත්කාලීන කිරීමට``` *.update now* ````යොදන්න.```\n\n' + TEENU + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'SI' || config.LANG == 'AZ') {

                await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබට පෞද්ගලික මාදිලියට මාරුවීමට අවශ්ය බව පෙනේ!_ *WORK_TYPE* \n_කණගාටු නොවන්න! මම ඔබ වෙනුවෙන් සත්යය සොයා ගැනීමට උත්සාහ කරමි..._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_Looks like you need to switch to general mode! _ * WORK_TYPE * \ n_Dont worry! I try to find the truth for you._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                await conn.sendMessage(
                    conn.user.jid,
                    '__ඔබට පොදු මාදිලියට මාරුවීමට අවශ්ය බව පෙනේ!_ *WORK_TYPE* \n_කණගාටු නොවන්න! මම ඔබ වෙනුවෙන් සත්යය සොයා ගැනීමට උත්සාහ කරමි...__', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_Looks like you need to switch to public mode! _ * WORK_TYPE * \ n_Dont worry! I try to find the truth for you._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'SI' || config.LANG == 'AZ') {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_මෙම_ *WORK_TYPE* _විධාන භාවිතය වැරදියි!_ \n_කරුණාකර මෙය භාවිතා කරන්න_ ```.setvar WORK_TYPE:private``` _හෝ_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
            else {
                return await conn.sendMessage(
                    conn.user.jid,
                    'Wrong WORK_TYPE key! Please use “private” or “public', MessageType.text
                );
            }
        }
    })
    
    
    
    
    //new update fixing test
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            var blogo = await axios.get(config.BYE_GIF, { responseType: 'arraybuffer' })
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(blogo.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            var gb = await getMessage(msg.key.remoteJid);
            var wlogo = await axios.get(config.WELCOME_GIF, { responseType: 'arraybuffer' })
            if (gb !== false) {

                await conn.sendMessage(msg.key.remoteJid, Buffer.from(wlogo.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
            }
            return;
        }          

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    
                    else if ((config.MAHN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.MAHN || config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.MAHN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '-- HATA RAPORU [WHATSASENA] --' + 
                                    '\n*WhatsAsena bir hata gerçekleşti!*'+
                                    '\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_' +
                                    '\n_Yardım için Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._\n\n' +
                                    'Gerçekleşen Hata: ' + error + '\n\n'
                                    , MessageType.text);
                            } else {
                                await conn.sendMessage(conn.user.jid, '__⦁═Queen 👸 Alexa═⦁BOT_☠☠_[error] ' +
                                    '\n\n*👻 ' + error + '*\n'
                                    , MessageType.text);
                            }
                        }
                    }
                }
            }
        )
    });
    
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
