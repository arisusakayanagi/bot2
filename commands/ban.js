module.exports = {
    name: 'ban',
    desc: 'Ban mem.',
    execute(message, args){
        if(message.member.permissions.has("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`Tên rác rưởi ${memberTarger} đã bị đuổi học!`);
            }
            else return message.reply("Chảo này to đấy, nhưng không dùng được...");
        }
        else return message.reply("Chảo nhầm người là bị ăn chảo đấy.");
    }
}
