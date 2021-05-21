/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const SnipDB = require('./sql/usersnip');

const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));


Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (filtreler) {
        filtreler.map(
            async (filter) => {
                let pattern = filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b')
                if (pattern.includes(message.message)) {
                    return await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
                }
            }
        );
    }
}));
const snipds = "Snip ayarlar"
const dbsl = "Bir Metni Yanıtla! Örnek: ```.snip test```"
const scc = "Adlı Snip Ayarlandı!"
const xsbl = "Lütfen snip ismi gir! Örnek: ```.snip test```"

Asena.addCommand({pattern: 'snip ?(.*)', fromMe: true, desc: snipds}, (async (message, match) => {

    if (!message.reply_message.text && match[1].length < 2 ) {
        return await message.client.sendMessage(
            message.jid,
            dbsl,
            MessageType.text
        )
    }
    if (message.reply_message.text && match[1].length < 2) {
        return await message.client.sendMessage(
            message.jid,
            xsbl,
            MessageType.text
        )
    }
    await SnipDB.saveSnip(message.reply_message.text)
    return await message.client.sendMessage(
        message.jid,
        '```' + mat + '``` ' + scc,
        MessageType.text
    )
}));
const gtsn = "Kayıtlı snip'leri gösterir."
const hatc = "Hiç Snip Kaydedilmemiş!"

Asena.addCommand({pattern: 'getsnip', fromMe: true, desc: gtsn}, (async (message, match) => {

    const _snips = await SnipDB.getSnip()
    const snips = []
    _snips.map(snip => {
        snip.push('$' + snip.snip)
    })
    if (snips.length < 2) {
        return await message.client.sendMessage(
            message.jid,
            '*' + hatc + '*',
            MessageType.text
        )
    }
}));
const flsh = "Snip siler"
const dlsnp = "Böyle Bir Snip Yok!"
const shck = "Adlı Snip Silindi!"

Asena.addCommand({ pattern: 'delsnip ?(.*)', fromMe: true, desc: flsh }, (async (message, match) => {
    
    const mat = match[1] 
    delsnp = await SnipDB.deleteSnip(mat);
    
    if (!delsnp) {
        await message.client.sendMessage(
            message.jid,
            '```' + dlsnp + '```',
            MessageType.text
        )
    } 
    else {
        await message.client.sendMessage(
            message.jid,
            '```' + mat + '``` ' + shck, 
            MessageType.text
        )
    }
}));
    
Asena.addCommand({pattern: '- ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
    const mat = match[1]

    var snip = await SnipDB.getSnip();
    if (snip !== match[1]) return await message.sendMessage(dlsnp); 
    snip.map(
        async (snip) => {
            pattern = new RegExp(snip.dataValues.regex ? snip.dataValues.pattern : ('\\b(' + snip.dataValues.pattern + ')\\b'), 'i');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,snip.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
