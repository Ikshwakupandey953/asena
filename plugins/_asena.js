const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asena');

Asena.addCommand({pattern: 'asena ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    var CMD_HELP = '';
    if (match[1] === '') {
        Asena.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                if (command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                else if (!command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                }
                else if (command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                else if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                else if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                else if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                else if  (command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n\n'
                }
                else if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n' 
                }
            }
        );
        
        await message.client.sendMessage(
            message.jid,'●▬▬▬ *WhatsAsena Dev-Test* ▬▬▬●\n\n' + CMD_HELP, MessageType.text
        );    
    } else {
        var CMD_HELP = '';
        Asena.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-züşğiöç123 4567890]*)/)
                } catch {
                    var cmatch = [command.pattern];
                }
                var cmap = cmatch[2]
                if (cmap == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += '*💬 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid,'●▬▬▬ *WhatsAsena Dev-Test* ▬▬▬●\n\n' + CMD_HELP, MessageType.text
        );
    }
}));
