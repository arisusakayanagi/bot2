const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        if(message.member.permissions.has("KICK_MEMBERS")){
            const target = message.mentions.users.first();
            if (target) {
 
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Khuyết Tật Tạm Thời');
 
                let memberTarget = message.guild.members.cache.get(target.id);
 
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> xuống quỷ giới khổ luyện go go br br`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> bị khóa "mõm" ${ms(ms(args[1]))}!`);
 
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } 
            else {
                message.channel.send('Em muốn chị "đuổi" đứa nào?');
            }
        }
        else return message.reply('Ara, ara, chụy đây chỉ làm vì Khang thôi!?')
    }
}
