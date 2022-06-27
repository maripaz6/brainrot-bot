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

const bot_map = new Map();

bot_map.set(/(crime|guacamole|avocado|green|stole)/, ["The avocado cartel wants to know your location."]);
bot_map.set(/(steal| rob |murder|death|dying)/, ["Swiper no swiping!"])
bot_map.set(/(poor|classism|rich|broke|middle class|bank|money|dollars|cents)/, [
    "overthrow the bourgeoisie",
    "eat the rich",
    "bernie 2024",
    "my money don't jingle jingle, it folds",
    "Chu Wanning snarled, “So what if you have money? Does money allow you to flip right and wrong, to repay kindness with cruelty? Does money let you do whatever you want, break all your promises?”"
])
bot_map.set(/(conscience|overthinking)/, ["conscience doth make a coward of us all"])
bot_map.set(/(good morning|morning|goose)/, [
    "This may be a morning, but who's to say it's good?",
    "Good riddance",
    "Is it actually morning though?"
])
bot_map.set(/(weird|strange)/, ["We all just hide the real weird until we meet our flavor of weird"])
bot_map.set(/(pei ming|ho|daddy)/, [
    "Jewsie is being annoying",
    "Jewsie keeps bugging me but I'm waiting on her",
    "How can I respond if there are no response optiosn!?",
    "Look what you made me do"
])
bot_map.set(/(mu qing|xuan zhen|fu yao)/, ["Cherry boy"])
bot_map.set(/(cool|exciting|awesome|peanuts|spies|spy|assassin|kill|world peace|bond man)/, [":sparkles: waku waku :sparkles:"])

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 33) return false;
    function replyToMessage(responses, regex) {
        if (regex.test(msg.content.toLowerCase())) {
            return msg.reply(responses[Math.floor(Math.random() * responses.length)]);
        }
    }
    bot_map.forEach(replyToMessage);
});

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 50) return false;
    isNitro = msg.content.toLowerCase().match('nitro');
    isHearts = msg.content.toLowerCase().match(':HEARTSONYOU:');
    isCoffee = msg.content.toLowerCase().match('nitro cold brew');
    nitro_responses = [
        "NQN - 10 Secrets That Discord Developers Don't Want You to Know...",
        "saving your wallet one gif at a time ~ Mari",
        ":elmofire:",
        "You'll learn to like the non-nitro life ~ Lyris",
        "Once jewsie's nitro ends, she will lose part of her personality! ~ Kei",
        "reject nitro, return to bot"
    ];
    if ((isNitro && !isCoffee) || (isHearts)) {
        return msg.reply(nitro_responses[Math.floor(Math.random() * nitro_responses.length)]);
    }
});

client.on('messageCreate', async msg => {
    if (msg.author.bot) return false;
    if (Math.random() * 100 >= 20) return false;
    let regex = /^i\'m ([a-zA-Z]+)$|^im ([a-zA-Z]+)$|^i am ([a-zA-Z]+)$/;
    response = "Hi [TK], I'm the brainrot bot.";
    if (regex.test(msg.content.toLowerCase())) {
        return msg.reply(response.replace("[TK]", msg.content.match(regex)[1]));
    }
});

client.login(token);