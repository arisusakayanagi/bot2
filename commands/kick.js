module.exports = {
    name: 'kick',
    desc: 'Kick mem.',
    execute(message, args){
        if(message.member.permissions.has("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`Đừng để tôi gặp lại tên rác rưởi ${memberTarger} này nữa!`);
            }
            else return message.reply("Không đạp được người này...");
        }
        else return message.reply("Có quyền đâu mà đòi đạp người ta ra khỏi đây?");
    }
}
