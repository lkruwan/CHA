/*
const lusifar = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const YTV_DESC = "Downloading songs "
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*◦•●◉Downloading Your Song◉●•◦*"
const YTV_UP = "*◦•●◉✿Uploading Your Song✿◉●•◦*"
const NO_RESULT = "*🌀can't Find Anything...*"


//උස්සන්නද ආවෙ බේසිකයෝ.බොහොම අමාරුවෙන් හැදුවෙ.උස්සන එකා අවජාතකයෙක් කියල හිතාගන්න පුලුවන් පොන්න හැත්ත.හුකන පොන්නයෝ
    
    lusifar.addCommand({ pattern: 'nosong ?(.*)', fromMe: true, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
            await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});

        await axios
          .get(`https://hardianto-chan.herokuapp.com/api/yt/playmp3?query=${linkk}&apikey=hardianto`)
          .then(async (response) => {
            const {
              channel,title,thumb,published,views,url
            } = response.data
            const videoBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})
            const VIDGH = await axios.get(url, {responseType: 'arraybuffer'})

            const cptt = "*📑Title:*  " + title + "\n\n" + "*📅Uploded date:* " + published + "\n\n" + "*🎞️ Channel:* " +  channel + "\n\n" + "*👁️Views:* " + views
            

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.image, {quoted: message.data ,mimetype: Mimetype.jpg, ptt: false,caption: cptt})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(VIDGH.data), MessageType.audio, {quoted: message.data ,mimetype: Mimetype.mp4Audio, ptt: false})
     
        })
       
      },
    )

    lusifar.addCommand({ pattern: 'nosong ?(.*)', fromMe: false, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
            await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});

        await axios
          .get(`https://hardianto-chan.herokuapp.com/api/yt/playmp3?query=${linkk}&apikey=hardianto`)
          .then(async (response) => {
            const {
              channel,title,thumb,published,views,url
            } = response.data
            const videoBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})
            const VIDGH = await axios.get(url, {responseType: 'arraybuffer'})

            const cptt = "*📑Title:*  " + title + "\n\n" + "*📅Uploded date:* " + published + "\n\n" + "*🎞️ Channel:* " +  channel + "\n\n" + "*👁️Views:* " + views
            

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.image, {quoted: message.data ,mimetype: Mimetype.jpg, ptt: false,caption: cptt})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(VIDGH.data), MessageType.audio, {quoted: message.data ,mimetype: Mimetype.mp4Audio, ptt: false})
     
        })
       
      },
    )
*/
