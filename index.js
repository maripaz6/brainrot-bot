const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// have lwj randomly respond with "blank is not allowed in the Cloud Recesses"
/*
  if (message.content === "/avatar") {
    const embed = new RichEmbed()
    .setTitle('Avatar!')
    .setAuthor("Your Avatar", message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .setColor('RANDOM')
    .setDescription('Avatar URL')
   message.reply(embed)
  }
});
*/

// ------------------ events section --------------------------- //

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 < 20) return false;
    isNitro = msg.content.toLowerCase().match('nitro');
    isCoffee = msg.content.toLowerCase().match('nitro cold brew');
    nitro_responses = [
        "NQN - 10 Secrets That Discord Developers Don't Want You to Know...",
        "saving your wallet one gif at a time ~ Mari",
        ":elmofire:",
        "You'll learn to like the non-nitro life ~ Lyris",
        "Once jewsie's nitro ends, she will lose part of her personality! ~ Kei",
        "reject nitro, return to bot"
    ];
    if (isNitro && !isCoffee) {
        return msg.reply(nitro_responses[Math.floor(Math.random() * nitro_responses.length)]);
    }
});

client.login(token);