/*
powerd by kaviyah Lusifar - kavishka.

Lusifar - kavishka.
*/

const lusifar = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'public') {
lusifar.addCommand({pattern: 'textimg', fromMe: false, desc: 'Text To Lmage List'}, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://i.ibb.co/PcBrtKd/imagelogo.jpg";
   r_text[1] = "https://i.ibb.co/PcBrtKd/imagelogo.jpg";
   r_text[2] = "https://i.ibb.co/PcBrtKd/imagelogo.jpg";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `
       「 LOGO PACK」
◄◉◉◉◉◉◉◄◯►◉◉◉◉◉◉◉◉►
   🛸TEXT TO IMAGE💌
◄◉◉◉◉◉◉◄◯►◉◉◉◉◉◉◉►

*🎨Command* : .prologi
*🧜‍♀Description* : unlimited logo creater.
*Example:* .prologo your text

*🎨Command* : .blogo
*🧜‍♀Description* : Text To Black & white bear Logo.

*🎨Command* : .3dwater
*🧜‍♀Description* : Text To 3D water Log9.

*🎨Command* : .dwings
*🧜‍♀Description* :Text To Neon Devil wings.

*🎨Command* : .lcube
*🧜‍♀Description* : Text To technology Neon Light.

*🎨Command* : .galaxyangel
*🧜‍♀Description* :Text To Angel wings.

*🎨Command* : .underwater
*🧜‍♀Description* : Text To Water 3D.

*🎨Command* : .halloween
*🧜‍♀Description* : Text To halloween Photo.

*🎨Command* : .starmetalic
*🧜‍♀Description* :Text To Silver Text Logo.

*🎨Command* : .loveshadow
*🧜‍♀Description* :Text To LOVE couple Shadow Text.

*🎨Command* : .galaxystyle
*🧜‍♀Description* : Text To GLAXY text.

*🎨Command* : .moon
*🧜‍♀Description* : Text To moon Image.

*🎨Command* : .water3d
*🧜‍♀Description* : Text To Water 3D v2.

*🎨Command* : .ninjalogo
*🧜‍♀Description* : Text To Gaming Ninja Logo.

*🎨Command* : .nleaves
*🧜‍♀Description* : text to green leaves.

*🎨Command* : .nglow
*🧜‍♀Description* : Text To glow text.

*🎨Command* : .nsky
*🧜‍♀Description* : Text To Sky img.

*🎨Command* : .buttonyt
*🧜‍♀Description* : Text To Youtube golden Button.

*🎨Command* : .bcwall
*🧜‍♀Description* : Text To broken wall img.

*🎨Command* : .nlogo
*🧜‍♀Description* : Text to Simple logo.

*🎨Command* : .s3d
*🧜‍♀Description* :Text To Super boxed 3D text.

*🎨Command* : .colortext
*🧜‍♀Description* :Text To video.

*🎨Command* : .bearlogo
*🧜‍♀Description* :Convert Text To BEAR LOGO.

*🎨Command* : .birthdaycake
*🧜‍♀Description* :Convert Text To BIRTHDAY cake v2.

*🎨Command* : .galaxybat
*🧜‍♀Description* :Convert Text To Glaxy style.

*🎨Command* : .artpapercut
*🧜‍♀Description* : Convert Text To paper Cut.

*🎨Command* : .3dwood
*🧜‍♀Description* : Convert Text To Wood Image.

*🎨Command* : .realisticvintage
*🧜‍♀Description* :Convert Text To stic image.

*🎨Command* : .neondevil
*🧜‍♀Description* : Convert Text To Neon Devil Wings.

*🎨Command* : .neon2
*🧜‍♀Description* :Convert Text To NEON  V2.

*🎨Command* : .thunder
*🧜‍♀Description* :Convert Text To THUNDER text.

*🎨Command* : .graffiti5
*🧜‍♀Description* :Convert Text To grff v2.

*🎨Command* : .snake
*🧜‍♀Description* : Convert Text To Snake text image.

*🎨Command* : .graffiticolor
*🧜‍♀Description* :Convert Text To grffi v3.

*🎨Command* : .metal
*🧜‍♀Description* : metal logo

*🎨Command* : .zombie3d
*🧜‍♀Description* : Convert Text To zombie 3d

*🎨Command* : .cloud
*🧜‍♀Description* : Convert Text To Cloud text.

*🎨Command* : .nneon
*🧜‍♀Description* :Convert Text To neon v5.

*🎨Command* : .lightgalaxy
*🧜‍♀Description* : Convert Text To Glaxy style v4.

*🎨Command* : .juventus
*🧜‍♀Description* :Convert Text To juventus image.

*🎨Command* : .cake
*🧜‍♀Description* :Convert Text To Birthday Cake image.

*🎨Command* : .barlog
*🧜‍♀Description* : Convert Text To Bear Logo.

*🎨Command* : .2galaxy
*🧜‍♀Description* : Convert Text To Glaxy style.

*🎨Command* : .paulscholes
*🧜‍♀Description* : Convert Text To paulscholes text image.

*🎨Command* : .multicolor3d
*🧜‍♀Description* : Convert Text To Multicolored 3d img.

*🎨Command* : .juventus
*🧜‍♀Description* : Convert Text To  Juventus Image.

*🎨Command* : .brokenglass
*🧜‍♀Description* :Convert Text To BROKEN glass.

*🎨Command* : .graffiti3
*🧜‍♀Description* : Convert Text To Graffitiwall.

*🎨Command* : .hotmetalic
*🧜‍♀Description* : Convert Text To home metal image.

`}) 

 }));
}
