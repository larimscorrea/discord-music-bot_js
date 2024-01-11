const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1};

const token = '';
bot.login(token);

bot.once('ready', () => {
    console.log("ready for usability")
});


client.on('message', msg => {
    if (msg.author.bot) {
        return;
    }

    if(msg.content.toLowerCase().startsWith("?play")) {
        let VoiceChannel = msg.guild.channels.find(channel => channel === '');

        if (VoiceChannel == null) {
            console.log("Channel hasn't find out.")
        }

        if (VoiceChannel !== null) {
            console.log("The channel has found out.")

            VoiceChannel.join()
                .then(connection => {
                const stream = ytdl('',
                {filter: 'audioonly'});

                const DJ = connection.playStream(stream, streamOptions);
                DJ.on('end', end => {
                    VoiceChannel.leave();
                })
            })

            .catch(console.error);


        }
    }
})