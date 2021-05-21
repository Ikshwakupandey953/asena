const Asena = require('../events');
const { MessageType, Mimetype, } = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const TRG = "Ğ Gönderir.\n⌨️ Örnek: .ğ 🌈"
const TRF = "F Gönderir."
const TRX = "X Gönderir."
const HIG = "Ğ शब्द भेजें\n⌨️ नमूना: .ğ 🌈"
const HIF = "F शब्द भेजें"
const HIX = "X शब्द भेजें"
const MLG = "അയയ്ക്കുക Ğ വാക്ക്\n⌨️ സാമ്പിൾ: .ğ 🌈"
const MLF = "അയയ്ക്കുക F വാക്ക്"
const MLX = "അയയ്ക്കുക X വാക്ക്"
const ENG = "Send Ğ word.\n⌨️ Example: .ğ 🌈"
const ENF = "Send F word."
const ENX = "Send X word."




// Plugin Start
if (con.LANG === 'TR') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: true, desc: TRG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: TRX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: false, desc: TRG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: false, desc: TRF }, async (message, match) => {

            const fsay = match[1]
            if (match[1] === 'ilter') return;
            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: false, desc: TRX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
}
else if (con.LANG === 'az') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: true, desc: TRG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: true, desc: TRF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: TRX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: false, desc: TRG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: false, desc: TRF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: false, desc: TRX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n        X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n        X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: true, desc: HIG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: true, desc: HIF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: HIX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: false, desc: HIG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: false, desc: HIF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: false, desc: HIX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
}
else if (con.LANG === 'ML') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: true, desc: MLG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: true, desc: MLF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: MLX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: false, desc: MLG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: false, desc: MLF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: false, desc: MLX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
}
else {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: true, desc: ENG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: true, desc: ENF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: ENX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({ pattern: 'ğ ?(.*)$', fromMe: false, desc: ENG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ', MessageType.text);

            var str = "ㅤ \n          ğğğğğğ\n\n          ğğğğğğ\n     ğğğğğğğğ\n   ğğ                     ğğ\n ğğ\nğğ                ğğğğ\nğğ                ğğğğ\n ğğ                        ğğ\n   ğğ                      ğğ\n     ğğğğğğğğ\n          ğğğğğğ";
  
            var res = str.replace(/ğ/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: false, desc: ENF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff', MessageType.text);

            var str = "ffffffff\nffffffff\nff\nff\nff\nffffff\nffffff\nff\nff\nff\nff\nff";
  
            var fres = str.replace(/f/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: false, desc: ENX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
}
// Plugin End
