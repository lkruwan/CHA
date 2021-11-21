/*
const lusifar = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*🎭Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🌀can't Find Anything...*"
const tk = Config.WORKTYPE == 'public' ? false : true

    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: tk, deleteCommand: false, desc: "Download videos",  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text ,  {quoted: message.data});
        await axios
          .get(`https://hardianto-chan.herokuapp.com/api/download/ytdownload?url=${linkk}&apikey=hardianto`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text ,  {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video,  {quoted: message.data} ,{mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
    lusifar.addCommand({ pattern: 'video ?(.*)', fromMe: true, deleteCommand: false, desc: "Download videos",  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text ,  {quoted: message.data});
        await axios
          .get(`https://hardianto-chan.herokuapp.com/api/download/ytdownload?url=${linkk}&apikey=hardianto`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text ,  {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video,  {quoted: message.data} ,{mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
*/
