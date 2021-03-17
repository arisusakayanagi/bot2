const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'a:';

const fs = require('fs');

client.commands = new Discord.Collection();

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online", 
        activity: {
            name: "Class 2A",  
            type: "WATCHING" 
        }
    });
 });

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file  of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Arisubot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) 
    return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'summon'){
        client.commands.get('summon').execute(message, args);
    }
    else if (command === 'clear'){
        message.delete();
        client.commands.get('clear').execute(message,args);
    }
    else if (command === 'kick'){
        client.commands.get('kick').execute(message,args);
    }
    else if (command === 'mute'){
        client.commands.get('mute').execute(message,args);
    }
    else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    else if (command === 'unmute'){
        client.commands.get('unmute').execute(message,args);
    }
});

client.login('ODEzMjkyMDg3MTI2MjYxNzYy.YDNLRw.JWSsRWg5vsX6gSk6j1Beitl7G7k');
