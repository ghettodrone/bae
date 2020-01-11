const { RichEmbed, Client}= require("discord.js")
const client = new Client();
const config = require('./config.json');

client.login(config.token);

client.on('ready', () => {
    console.log(`${client.user.username} online`);
    client.user.setPresence({status: 'dnd', game:{name: ' за KASQ', type: 3}})

});

client.on('message', async message => {
    let prefix = config.prefix;

    if (message.content.startsWith(prefix + 'Hello')) {
        message.channel.send("Hello!")
    }
});
