const { execute } = require("./ping");

module.exports = {
    name: 'summon',
    description: 'Summon.',
    execute(message, args){
        message.channel.send('<@531285577853566996>');
    }
}