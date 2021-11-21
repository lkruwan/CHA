

const lusifar = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let tn = Config.WORKTYPE == 'public' ? false : true

lusifar.addCommand({ pattern: 'zombie3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'metal ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/metal?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'cloud ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/cloud?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'graffiticolor ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/graffiticolor?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'nneon ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/neon?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'snake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/snake?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'lightgalaxy ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/lightgalaxy?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'graffiti5 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/graffiti5?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'hotmetalic ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/hotmetalic?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'thunder ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/thunder?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'graffiti3 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/graffiti3?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'neon2 ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/neon2?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'brokenglass ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/brokenglass?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'neondevil ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/neondevil?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));

lusifar.addCommand({ pattern: 'juventus ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/juventus?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'realisticvintage ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/realisticvintage?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'multicolor3d ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/multicolor3d?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: '3dwood ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/3dwood?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'paulscholes ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/paulscholes?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'artpapercut ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/artpapercut?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: '2galaxy ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/galaxy?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'galaxybat ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/galaxybat?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'cake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/cake?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'writingchalk ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/writingchalk?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'birthdaycake ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/birthdaycake?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'barlog ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/blackpinkneon?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'bearlogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/bearlogo?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'fi ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
lusifar.addCommand({ pattern: 'if ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://api.dapuhy.ga/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=ALEXA-1`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})
    }));
