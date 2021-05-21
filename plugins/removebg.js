/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const {promisify} = require('util');
const fetch = require('node-fetch');

const pipeline = promisify(stream.pipeline);

const Language = require('../language');
const Lang = Language.getString('removebg');

Asena.addCommand({pattern: 'removebg ?(.*)', fromMe: true, desc: Lang.REMOVEBG_DESC}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO,MessageType.text);
    if (Config.RBG_API_KEY === false) return await message.client.sendMessage(message.jid,Lang.NO_API_KEY,MessageType.text);
    if (message.reply_message.image) {
        var load = await message.reply(Lang.RBGING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        }); 
    
        await pipeline(
	    	    rbg,
		    fs.createWriteStream('rbg.png')
        );
    
        await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'WhatsAsena.png', mimetype: Mimetype.png});
        await load.delete();
    } else if (message.reply_message.video) {
        const url = "https://api.unscreen.com/v1.0/videos";
        const options = {
            headers: {
                'accept': "application/json",
                'Content-Type': "multipart/form-data"
            },
            form: {
                'video_file': 'undefined.mp4;type=video/mp4',
                'format': 'mp4',
                'background_color': '00ff00'
            }
        }
        await fetch(url, options)
            .then(async (res) => {
                var url = res.json() 
            })
            .then(async (data) => {
            await message.sendMessage(data) 
        });
    }
}));
