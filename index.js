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

/* EXAMPLE FORMAT
1. Copy the block of code & move it out of the comment
( the words should have colors like the nitro example :)
2. Replace all TRIGGER_WORD with your own triggers (ex. nitro)
3. Replace RESPONSE with how the bot responds (ex. "a waste of money")

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 20) return false;

    let regex = /(TRIGGER_WORD1|TRIGGER_WORD2|TRIGGER_WORD3)/;
    // if you have more than 3 triggers, keep adding | symbols between them
    // if you have less than 3 triggers, delete the extra TRIGGER_WORDX and | left over.
    // do NOT use quotes ('' or "")
    
    responses = [
        "RESPONSE1",
        "RESPONSE2"
    ];
    // if you have more than 2 responses, keep adding with , in between them
    // if you have one response, no need for a comma
    // make sure you use the quotation marks around these phrases!
    // make sure you use "" and not ''
    
    if (regex.test(msg.content.toLowerCase())) {
        return msg.reply(responses[Math.floor(Math.random() * responses.length)]);
    }
});
*/

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 20) return false;
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

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 20) return false;
    let regex = /(crime|guacamole|avocado)/;
    const isAvocado = regex.test(msg.content.toLowerCase());
    if (isAvocado) {
        return msg.reply("The avocado cartel wants to know your location.");
    }
});

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 20) return false;
    let regex = /(steal| rob |stole|murder)/;
    const isSwiper = regex.test(msg.content.toLowerCase());
    if (isSwiper) {
        return msg.reply("Swiper no swiping!");
    }
});

client.login(token);
