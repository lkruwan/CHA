
const lusifar = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const KS = Config.WORKTYPE == 'public' ? false : true

const OLPMAIN_2015 = " 🗃️2015 O/L Main Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2015```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2015```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2015```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2015```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2015```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2015``` "
const OLPIBRA_2015 = " 🗃️2015 1st bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2015```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2015```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2015```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2015```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2015```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2015```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2015```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2015```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2015``` "
const OLP2BRA_2015 = " 🗃️2015 2nd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2015```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2015```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2015```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2015```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2015```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2015```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2015```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2015``` "
const OLP3BRA_2015 = " 🗃️2015 3rd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2015```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2015``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2015```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2015```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2015```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2015``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2015``` "

const OLPMAIN_2016 = " 🗃️2016 O/L Main Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2016```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2016```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2016```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2016```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2016```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2016``` "
const OLPIBRA_2016 = " 🗃️2016 1st bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2016```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2016```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2016```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2016```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2016```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2016```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2016```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2016```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2016``` "
const OLP2BRA_2016 = " 🗃️2016 2nd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2016```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2016```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2016```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2016```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2016```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2016```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2016```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2016``` "
const OLP3BRA_2016 = " 🗃️2016 3rd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2016```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2016``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2016```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2016```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2016```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2016``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2016``` "

const OLPMAIN_2017 = " 🗃️2017 O/L Main Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2017```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2017```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2017```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2017```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2017```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2017``` "
const OLPIBRA_2017 = " 🗃️2017 1st bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2017```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2017```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2017```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2017```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2017```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2017```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2017```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2017```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2017``` "
const OLP2BRA_2017 = " 🗃️2017 2nd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2017```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2017```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2017```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2017```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2017```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2017```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2017```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2017``` "
const OLP3BRA_2017 = " 🗃️2017 3rd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2017```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2017``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2017```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2017```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2017```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2017``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2017``` "

const OLPMAIN_2018 = " 🗃️2018 O/L Main Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2018```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2018```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2018```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2018```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2018```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2018``` "
const OLPIBRA_2018 = " 🗃️2018 1st bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2018```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2018```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2018```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2018```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2018```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2018```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2018```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2018```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2018``` "
const OLP2BRA_2018 = " 🗃️2018 2nd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2018```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2018```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2018```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2018```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2018```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2018```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2018```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2018``` "
const OLP3BRA_2018 = " 🗃️2018 3rd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2018```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2018``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2018```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2018```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2018```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2018``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2018``` "

const OLPMAIN_2019 = " 🗃️2019 O/L Main Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2019```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2019```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2019```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2019```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2019```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2019``` "
const OLPIBRA_2019 = " 🗃️2019 1st bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2019```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2019```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2019```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2019```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2019```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2019```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2019```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2019```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2019``` "
const OLP2BRA_2019 = " 🗃️2019 2nd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2019```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2019```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2019```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2019```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2019```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2019```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2019```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2019``` "
const OLP3BRA_2019 = " 🗃️2019 3rd bracket Subjects Papers🗃️\n   《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2019```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2019``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2019```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2019```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2019```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2019``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2019``` "

const PMENC = "  ===📇 O/L Pass Papers 📇=== \n♣️··÷¦÷····÷¦÷·· ·📜· ··÷¦÷····÷¦÷··♣️  \n\n\n📁 2015 O/L Papers \n\n    📑 *Main Subjects*\n    🏷️ *Command* - .main 2015 \n\n    📑 *1st Basket Subject*\n    🏷️ *Command* - .1bra 2015 \n\n    📑 *2nd Basket Subject*\n    🏷️ *Command* - .2bra 2015 \n\n    📑 *3rd Basket Subject*\n    🏷️ *Command* - .3bra 2015 \n\n\n📁 2016 O/L Papers \n\n    📑 *Main Subjects*\n    🏷️ *Command* - .main 2016 \n\n    📑 *1st Basket Subject*\n    🏷️ *Command* - .1bra 2016 \n\n    📑 *2nd Basket Subject*\n    🏷️ *Command* - .2bra 2016 \n\n    📑 *3rd Basket Subject*\n    🏷️ *Command* - .3bra 2016 \n\n\n📁 2017 O/L Papers \n\n    📑 *Main Subjects*\n    🏷️ *Command* - .main 2017 \n\n    📑 *1st Basket Subject*\n    🏷️ *Command* - .1bra 2017 \n\n    📑 *2nd Basket Subject*\n    🏷️ *Command* - .2bra 2017 \n\n    📑 *3rd Basket Subject*\n    🏷️ *Command* - .3bra 2017 \n\n\n📁 2018 O/L Papers \n\n    📑 *Main Subjects*\n    🏷️ *Command* - .main 2018 \n\n    📑 *1st Basket Subject*\n    🏷️ *Command* - .1bra 2018 \n\n    📑 *2nd Basket Subject*\n    🏷️ *Command* - .2bra 2018 \n\n    📑 *3rd Basket Subject*\n    🏷️ *Command* - .3bra 2018 \n\n\n📁 2019 O/L Papers \n\n    📑 *Main Subjects*\n    🏷️ *Command* - .main 2019 \n\n    📑 *1st Basket Subject*\n    🏷️ *Command* - .1bra 2019 \n\n    📑 *2nd Basket Subject*\n    🏷️ *Command* - .2bra 2019 \n\n    📑 *3rd Basket Subject*\n    🏷️ *Command* - .3bra 2019 \n\n ✿=========●🎖️●=========✿ \n\n 💠 Creator:- \n    🪀kavishka sandaruwan \n\n 💠 Credits:- \n    🪀 Rashmika Rodrigo \n    🪀 Manuja    \n 💠Powered By Lusifar \n\n ✿=========●📜●=========✿  "

//panel all 

lusifar.addCommand({pattern: 'ol paper', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[1] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: PMENC }) 

 }));

//MAIN 2015
lusifar.addCommand({pattern: 'main 2015', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[1] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPMAIN_2015 }) 

 }));


//IBRA MENU 2015

lusifar.addCommand({pattern: '1bra 2015', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {


var r_text = new Array ();

    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPIBRA_2015 }) 
 
  }));


//2BRA MENU 2015

lusifar.addCommand({pattern: '2bra 2015', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP2BRA_2015 }) 
 
  }));
    


//3BRA MENU 2015

lusifar.addCommand({pattern: '3bra 2015', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP3BRA_2015 }) 
 
  }));
  


//MAIN 2016
lusifar.addCommand({pattern: 'main 2016', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
   r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPMAIN_2016 }) 

 }));


//IBRA MENU 2016

lusifar.addCommand({pattern: '1bra 2016', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {


var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPIBRA_2016 }) 
 
  }));


//2BRA MENU 2016

lusifar.addCommand({pattern: '2bra 2016', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP2BRA_2016 }) 
 
  }));
    


//3BRA MENU 2016

lusifar.addCommand({pattern: '3bra 2016', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP3BRA_2016 }) 
 
  }));
  
  
  
  


//MAIN 2017
lusifar.addCommand({pattern: 'main 2017', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
   r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPMAIN_2017 }) 

 }));


//IBRA MENU 2017

lusifar.addCommand({pattern: '1bra 2017', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {


var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPIBRA_2017 }) 
 
  }));


//2BRA MENU 2017

lusifar.addCommand({pattern: '2bra 2017', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP2BRA_2017 }) 
 
  }));
    


//3BRA MENU 2017

lusifar.addCommand({pattern: '3bra 2017', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP3BRA_2017 }) 
 
  }));
  




//MAIN 2018
lusifar.addCommand({pattern: 'main 2018', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
   r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPMAIN_2018 }) 

 }));


//IBRA MENU 2018

lusifar.addCommand({pattern: '1bra 2018', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {


var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPIBRA_2018 }) 
 
  }));


//2BRA MENU 2018

lusifar.addCommand({pattern: '2bra 2018', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP2BRA_2018 }) 
 
  }));
    


//3BRA MENU 2018

lusifar.addCommand({pattern: '3bra 2018', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP3BRA_2018 }) 
 
  }));
  



//MAIN 2019
lusifar.addCommand({pattern: 'main 2019', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
   r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
   r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPMAIN_2019 }) 

 }));


//IBRA MENU 2019

lusifar.addCommand({pattern: '1bra 2019', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {


var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLPIBRA_2019 }) 
 
  }));


//2BRA MENU 2019

lusifar.addCommand({pattern: '2bra 2019', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP2BRA_2019 }) 
 
  }));
    


//3BRA MENU 2019

lusifar.addCommand({pattern: '3bra 2019', fromMe: KS, desc: "UPLOAD PASSPAPER" }, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
    r_text[1] = "https://drive.google.com/u/1/uc?id=1tBbTe2j9MbhrGUF9H_n9xsNL2fUJZN_z&export=download";
    r_text[2] = "https://drive.google.com/u/1/uc?id=1M3LdWJ6yDJpJTODlvgEpBRrsBZknor-_&export=download";
     
         
      var i = Math.floor(3*Math.random())
 
     var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
 
     await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: OLP3BRA_2019 }) 
 
  }));
