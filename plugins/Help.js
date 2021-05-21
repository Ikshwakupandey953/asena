/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');

// ==================== MAIN DESCRIPTION TEXT ====================
const h_Des = "Yardım menüsünden botu kullanım hakkında bilgi verir."
const h_DedEN = "Gives information about using the bot from the Help menu."
const matchnullEN = "========== *🆘 General Help 🆘* ==========\n\n🔹 *.alive:* Checks if the bot is running.\n\n🔹 *.asena:* Shows the complete list of commands.\n🔹 *.setvar:* It settings config without entering Heroku.\n\n🔸 For more help, use the command ```.help <the topic you want help with>```\nExample: ```.help how can ı turn to public my bot?```\n\n========== *End General Help* =========="
const matchnull = "========== *🆘 Genel Yardım 🆘* ==========\n\n🔹 *.alive:* Botun çalışıp çalışmadığını kontrol eder.\n🔹 *.asena:* Tüm komut listesini gösterir.\n🔹 *.setvar:* Herokuya girmeden config ayarlar.\n\n🔸 Daha fazla yardım için ```.help <yardım almak istediğiniz konu>``` komutunu kullanın.\nÖrnek: ```.help botumu nasıl public yaparım?```\n\n========== *Genel Yardım Bitti* =========="
const notfound = "```Almak istediğiniz yardım bulunamadı!```\n```Lütfen daha açıklayıcı bir şekilde sorunu belirtin.```"
const notfoundEN = "```The help you wanted to get was not found!```\n```Please state the problem in a more descriptive way.```"

// ==================== ALL DESCRİPTİONS ====================
const pubTR = "Botunuzu public yapmak komutları herkese açık yapacaktır. Public yapıldıktan sonra kullanıcı sadece kişisel ve admin komutlarını kullanabilir hale gelir. Onun dışında komutları kullanamaz.\nBotunuzu public yapmak için *.setvar WORK_TYPE:public* komutunu kullanın."
const pubEN = "Making your bot public will make the commands public. After it is made public, the user can only use personal and admin commands. User cannot use commands other than this.\n To make your bot public, type *.setvar WORK_TYPE:public*"

const privTR = "Botunuzu private yapmak komutları sadece size özel yapar. Başkaları kullanamaz.\nBotunuzu private yapmak için *.setvar WORK_TYPE:private* komutunu kullanın."
const privEN = "Making your bot private makes commands private only for you. Anyone cannot use.\nTo make your bot private, type *.setvar WORK_TYPE:private*"


if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
    
    Asena.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_Des}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnull,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) ) {
            return await message.client.sendMessage(
                message.jid,
                privTR,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfound,
                MessageType.text
            );
        }
    }));
}
else {
    
    Asena.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_DedEN}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('how')) || (match[1].includes('public') && match[1].includes('set')) || (match[1].includes('public') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('how')) || (match[1].includes('private') && match[1].includes('set')) || (match[1].includes('private') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                privEN,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundEN,
                MessageType.text
            );
        }
    }));
}
