module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        if(message.member.permissions.has("KICK_MEMBERS")){
            const target = message.mentions.users.first();
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'khuyết tật tạm thời');
 
                let memberTarget= message.guild.members.cache.get(target.id);
 
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> đã được giải thoát.`);
            } 
            else{
            message.channel.send('Làm gì có ai?');
            }   
        } 
        else message.reply('Làm gì có quyền đưa người về bờ?')  
    }   
}
