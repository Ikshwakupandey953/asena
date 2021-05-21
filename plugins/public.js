/*
const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions, GroupSettingChange} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const exec = require('child_process').exec;
const {execFile, spawnSync} = require('child_process');
const cwebp = require('cwebp-bin');
const Language = require('../language');
const cheerio = require('cheerio');
const FormData = require('form-data');
const got = require("got");
const request = require('request');
const deepai = require('deepai'); 
deepai.setApiKey('3098e7e8-2590-436e-89b0-939da517c1f1');
const memeMaker = require('meme-maker');
const tesseract = require("node-tesseract-ocr");
const langs = require('langs');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
const translatte = require('translatte');
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
const https = require('https');
const googleTTS = require('google-translate-tts');
const yts = require('yt-search');
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi({clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'});
const ytdl = require('ytdl-core');
const wiki = require('wikijs').default;
const gis = require('g-i-s');
const speedTest = require('@lh2020/speedtest-net');
const TinyURL = require('tinyurl');
const XMLang = Language.getString('conventer');
const ALLang = Language.getString('_asena');
const CARLang = Language.getString('carbon');
const DEPLang = Language.getString('deepai'); 
const FFLang = Language.getString('ffmpeg');
const MEMLang = Language.getString('memes');
const NEKOLang = Language.getString('nekobin');
const OCRLang = Language.getString('ocr');
const PROFLang = Language.getString('profile');
const TAGLang = Language.getString('tagall');
const SCARPLang = Language.getString('scrapers');
const GİTLang = Language.getString('github');
const LYRLang = Language.getString('lyrics');
const COVLang = Language.getString('covid');
const SSLang = Language.getString('webss');
const IGLang = Language.getString('instagram');
const TTLang = Language.getString('tiktok');
const SOMELang = Language.getString('ttp');
const STİCLang = Language.getString('sticker');
const SYSLang = Language.getString('system_stats');
const TTPLang = Language.getString('ttp');
const UNLang = Language.getString('unvoice');
const VOİLang = Language.getString('voicy');
const WALLLang = Language.getString('wallpaper');
const WEALang = Language.getString('weather');
const WEBLang = Language.getString('web');
const WHOLang = Language.getString('whois');

var HANDLER = '';
if (/\[(\W*)\]/.test(Config.HANDLERS)) {
    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
    HANDLER = '.';
}
let antilink = JSON.parse(fs.readFileSync('/root/WhatsAsenaDuplicated/media/antilink.json'))
var isLink = { situation: { parts: false } }

Asena.addCommand({pattern: '81837527', deleteCommand: false, dontAddCommandList: true, fromMe: true}, async (message, match) => {
    if (isLink.situation.parts) {
        return await message.client.groupRemove(message.jid, [message.reply_message.data.participant])
        isLink.situation.parts = false
    }
});
function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: "Made by WhatsAsena",
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}

Asena.addCommand({on: 'text', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    const fmsg = message.message
    const msgtxt = MessageType.text
    const msgim = MessageType.image
    const msgau = MessageType.audio
    const msgvid = MessageType.video
    if (fmsg == HANDLER + 'asena') {
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var NEWHAND = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        NEWHAND = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        NEWHAND = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *WhatsAsena Private* ▬▬▬●\n\n' + CMD_HELP, msgtxt
            );    
        } else {
            var CMD_HELP = '';
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var NEWHAND = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            NEWHAND = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            NEWHAND = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '*🛠 ' + ALLang.COMMAND + ':* ```' + (match.length >= 3 ? (NEWHAND + match[2]) : command.pattern) + '```\n' + '*💬 ' + ALLang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + ALLang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + ALLang.WARN + ':* ```' + command.warn + '```\n\n';
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += ALLang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid,'●▬▬▬ *WhatsAsena Private* ▬▬▬●\n\n' + CMD_HELP, msgtxt
            );
        }
    }
    else if (fmsg == HANDLER + 'xmedia') {
        await message.client.sendMessage(message.jid,'💻Usage: *.mp4enhance*\nℹ️Desc: 🇹🇷 Videnun kalitesini artırır.\n🇬🇧 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: 🇹🇷 Videonun FPS değerini arttırır.\n🇬🇧 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇹🇷 Ağır çekim olmayan videolara true-slowmo uygular.\n🇬🇧 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 4 kat düşürür.\n🇬🇧 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 2 kat düşürür.\n🇬🇧 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: 🇹🇷 Videoyu gif’e çevirir.\n🇬🇧 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: 🇹🇷 Videoyu sesli gif’e çevirir.\n🇬🇧 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇹🇷 Video arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇹🇷 Videonun titreşimini azaltır.\n🇬🇧 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇹🇷 Videoya gökkuşağı efekti uygular.\n🇬🇧 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇹🇷 Videonun renklerini daha canlı ve çekici yapar.\n🇬🇧 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇹🇷 Videoya çizim efekti uygular.\n🇬🇧 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇹🇷 Videoya negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇹🇷 Videoya nostaji efekti uygular.\n🇬🇧 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇹🇷 Videoya monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇹🇷 Videoyu tersten oynatır.\n🇬🇧 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇹🇷 Videoya edge efekti uygular.\n🇬🇧 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇹🇷 Fotoğrafı 5 saniyelik videoya çevirir.\n🇬🇧 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇹🇷 Sesin spektrum görüntüsünü video yapar.\n🇬🇧 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: 🇹🇷 Sesin dalga aralığını videoya çevirir.\n🇬🇧 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇹🇷 Sesin frekans aralığını videoya çevirir.\n🇬🇧 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: 🇹🇷 Sesin farklı bir histogramını videoya çevirir.\n🇬🇧 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇹🇷 Sesin Desibel Değerini Videoya Dönüştürür.\n🇬🇧 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇹🇷 Ses CQT değerini videoya çevirir.\n🇬🇧 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇹🇷 Sesi kristal berraklık düzeyinde ayarlar.\n🇬🇧 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇹🇷 Sesi bozar ve gülünç hale getirir.\n🇬🇧 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇹🇷 Sesi Tersen Oynatır.\n🇬🇧 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇹🇷 Sesi inceltir ve hızlandırır.\n🇬🇧 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇹🇷 Sesi kalınlaştırır ve yavaşlatır.\n🇬🇧 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇹🇷 Sesi 2 kat hızlandırır.\n🇬🇧 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo.', msgtxt);
    }
    else if (fmsg.includes(HANDLER + 'x4mp4') && !fmsg.includes('Desc')) {
        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'x2mp4') && !fmsg.includes('Desc')) {
        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4image') && !fmsg.includes('Desc')) {
        if (!message.reply_message.image) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'spectrum') && !fmsg.includes('Desc')) {
        if (!message.reply_message.image) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'waves') && !fmsg.includes('Desc')) {
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'frequency') && !fmsg.includes('Desc')) {
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',msgtxt);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'avec') && !fmsg.includes('Desc')) {
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'volumeaudio') && !fmsg.includes('Desc')) {
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'cqtaudio') && !fmsg.includes('Desc')) {
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp3eq' && !fmsg.includes('Desc'))) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp3crusher') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp3reverse') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4vintage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4reverse') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4bw') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'bwimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'vintageimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4enhance') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'blurimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4blur') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp3pitch') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4edge') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp3low') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'x2mp3') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'edgeimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'enhanceimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp3volume') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'gif') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), msgvid, {mimetype: Mimetype.gif, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'agif') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'grenimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'interp') && !fmsg.includes('Desc')) {
        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {caption: `Made by WhatsAsena\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'rainbowimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4rainbow') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'negativeimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4negative') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4art') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'artimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4stab') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4color') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), msgvid, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'colorimage') && !fmsg.includes('Desc')) {
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'mp4slowmo') && !fmsg.includes('Desc')) {
        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```', msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', msgtxt);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), msgvid, {caption: 'True Slow-Motion by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'carbon') && !fmsg.includes('botu')) {
        if (match[1] === '') return await message.client.sendMessage(message.jid,CARLang.CARBON_NEEDWORD, msgtxt);

        var rgbafmin = 0; 
        var rgbafmax = 255;  
        var rgbafirst = Math.floor(Math.random() * (+rgbafmax - +rgbafmin) + +rgbafmin)

        var rgbasmin = 0; 
        var rgbasmax = 255;  
        var rgbasecond = Math.floor(Math.random() * (+rgbasmax - +rgbasmin) + +rgbasmin)

        var rgbatmin = 0; 
        var rgbatmax = 255;  
        var rgbathird = Math.floor(Math.random() * (+rgbatmax - +rgbatmin) + +rgbatmin)

        var Theme = new Array ()
        Theme[0] = "twilight";
        Theme[1] = "panda";
        Theme[2] = "blackboard";
        Theme[3] = "seti";
        Theme[4] = "verminal";
        Theme[5] = "nord";
        Theme[6] = "monokai";
        Theme[7] = "cobalt";
        Theme[8] = "vscode";
        Theme[9] = "material";
        Theme[10] = "hopscotch";
        Theme[11] = "shades-of-purple";
        Theme[12] = "oceanic-next";
        Theme[13] = "one-light";
        Theme[14] = "one-dark";
        Theme[15] = "synthwave-84";
        Theme[16] = "zenburn";
        Theme[17] = "3024-night";
        Theme[18] = "a11y-dark";
        Theme[19] = "dracula-pro";
        Theme[20] = "night-owl";
        Theme[21] = "dracula-pro";
        var i = Math.floor(22*Math.random())

        var Language = new Array ()
        Language[0] = "Apache";
        Language[1] = "Python";
        Language[2] = "Javascript";
        Language[3] = "Bash";
        Language[4] = "cobol";
        Language[5] = "coffeescript";
        Language[6] = "Crystal";
        Language[7] = "Erlang";
        Language[8] = "GraphQL";
        var l = Math.floor(9*Math.random())

        var respoimage = await axios.get(`https://thiccyscarbonapi.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=` + Theme[i] + '&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&backgroundColor=rgba(' + rgbafirst + ',' + rgbasecond + ',' + rgbathird + ')&language=' + Language[l], { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), msgim, {mimetype: Mimetype.png, caption: 'Made by WhatsAsena'})
    }
    else if (fmsg.includes(HANDLER + 'videosticker') && !fmsg.includes('botu')) {
        if (message.reply_message === false) return await message.sendMessage(XMLang.STİCKER_NEEDREPLY);

        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/WhatsAsenaDuplicated/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(message.jid, fs.readFileSync('/root/WhatsAsenaDuplicated/stweb.mp4'), msgvid, { mimetype: Mimetype.mp4, caption: 'Made by WhatsAsena', quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/WhatsAsenaDuplicated/stweb.mp4')) fs.unlinkSync('/root/WhatsAsenaDuplicated/stweb.mp4')
                })
            })
        })
    }
    else if (fmsg.includes(HANDLER + 'mp4audio') && !fmsg.includes('botu')) {
        if (message.reply_message === false) return await message.client.sendMessage(message.jid, XMLang.MP4TOAUDİO_NEEDREPLY, msgtxt);
        var downloading = await message.client.sendMessage(message.jid,XMLang.MP4TOAUDİO, msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), msgau, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
    else if (fmsg.includes(HANDLER + 'imagesticker') && !fmsg.includes('botu')) {
        if (message.reply_message === false) return await message.client.sendMessage(message.jid, XMLang.STİCKER_NEEDREPLY, msgtxt);
        var downloading = await message.client.sendMessage(message.jid,XMLang.STİCKER, msgtxt);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.jpg'), msgim, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }
}));


Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    let regex1 = new RegExp('http://')
    let regex2 = new RegExp('https://')
    if (regex1.test(message.message)) {
        if (message.jid == '905524317852-1612300121@g.us' || message.jid == '905511384572-1617736751@g.us') {
            await message.client.sendMessage(message.jid, '*link detected*', MessageType.text, {quoted: message.data })
        }
    } 
    else if (regex2.test(message.message)) {
        if (message.jid == '905524317852-1612300121@g.us' || message.jid == '905511384572-1617736751@g.us') {
            await message.client.sendMessage(message.jid, '*link detected*', MessageType.text, {quoted: message.data })
        }
    }
}));
*/
