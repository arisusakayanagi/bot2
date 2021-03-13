module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
       if(message.member.permissions.has("MANAGE_MESSAGES")){
       
            if (!args[0]) return message.reply("Không nhập số thì xoá bừa à?");
 
            if(isNaN(args[0])) return message.reply("Ý của mi là không cần xoá?");
 
            if(args[0] > 100) return message.reply("Xoá gì lắm thế?");
        
            if(args[0] < 1) return message.reply("Không xoá thì gọi tau ra làm gì?");
       }
       else return message.reply("Có quyền đâu mà đòi xoá?");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
   }
}
