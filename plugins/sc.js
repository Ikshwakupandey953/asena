const Asena = require('../events')
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const axios = require('axios')
const TikTokScraper = require('tiktok-scraper')

const ttom = "Tiktokdan video indirir, profil bulur."
const usf = "```Kullanıcı Aranıyor!```"
const vsf = "```Video İndiriliyor...```"
const gzh = "Gizli Hesap"
const nghs = "Açık Hesap"
const evt = "Onaylanmış Hesap"
const hyr = "Onaylanmamış Hesap"

Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, desc: ttom}, (async (message, match) => {

    if (match[1].length < 20) {
        await message.client.sendMessage(
            message.jid,
            usf,
            MessageType.text
        );

        var info = await TikTokScraper.getUserProfileInfo(match[1], { hdVideo: true, noWaterMark: true })

        var buff = await axios.get(`${info.user.avatarLarger}`, { responseType: 'arraybuffer' })

        const capt = `*Kullanıcı Adı:* ${info.user.uniqueId} \n*Hesap İsmi:* ${info.user.nickname} \n*Takipçi Sayısı:* ${info.stats.followerCount} \n*Takip Edilen:* ${info.stats.followingCount} \n*Toplam Beğeni:* ${info.stats.heartCount} \n*Toplam Video Sayısı:* ${info.stats.videoCount} \n*Biyografi:* ${info.user.signature} \n*Onaylanmış Hesap mı?:* ${info.user.verified ? evt : hyr} \n*Hesap Türü:* ${user.privateAccount ? ghz : nghs}`    

        return await message.sendMessage(
            Buffer.from(buff.data),
            MessageType.image,
            { caption: capt }
        )  
    }
    else if (match[1] == '') {
        return await message.sendMessage('*Kelime Gir!*')
    }
    else {
        await message.client.sendMessage(
            message.jid,
            vsf,
            MessageType.text
        )
        var vid = await TikTokScraper.getVideoMeta(match[1], { hdVideo: true, noWaterMark: true })

        var buffv = await axios.get(`${vid.collector.videoUrlNoWaterMark}`, { responseType: 'arraybuffer' })

        const captv = `*Kullanıcı Adı:* ${vid.collector.authorMeta} \n*Açıklama:* ${vid.collector.text} \n*Beğeni Sayısı:* ${vid.collector.diggCount} \n*Yorum Sayısı:* ${vid.collector.commentCount} \n*İzlenme Sayısı:* ${vid.collector.playCount} \n*Paylaşım Sayısı:* ${vid.collector.shareCount} \n*Video Uzunluğu:* ${vid.collector.videoMeta.duration} Saniye \n*Müzik İsmi:* ${vid.collector.musicMeta.musicName} \n*Müzik Sahibi:* ${vid.collector.musicMeta.musicAuthor}* \n*Kullanıcı Linki:* https://tiktok.com/@${vid.collector.authorMeta}`  

        return await message.sendMessage(
            Buffer.from(buffv.data),
            MessageType.video,
            { caption: captv }
        )
    }
}));
