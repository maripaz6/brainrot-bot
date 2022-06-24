const { SlashCommandBuilder } = require('@discordjs/builders');
const possibleFortunes = [
    'You will have a shitty day, dog fucker.',
    'Truly, the higher you climb, the harder you fall.',
    'Life is full of surprises; one cannot escape whatever that comes.',
    'Fortunes are hard, so fuck off.',
    'To truly find yourself, play hide-and-seek alone.',
    'Ignore previous fortune',
    'Ignore previous fortune',
    'Ignore previous fortune',
    'Ignore previous fortune',
    'Run.',
    'Careful to not lose your head D:',
    'What matters is you and not the state of you',
    'Your fate is always up to you and not the heavens',
    'Game as the meaning of your life.',
    'You might meet a f-f-friend today',
    'No sad thoughts, only happy thots.',
    "Enjoy the little detours to the fullest. Because that's where you find the things more important than what you want",
    'Ehe.',
    "If you die again, I'll kill you.",
    "If you pray hard enough, you can fuck god.",
    "You cannot draw coins from an ATM",
    "When life gives you melons, you may be dyslexic.",
    "A leader starts planning before taking any actions",
    "Attack the enemy when they are in disorder",
    "What matters is you, not the state of you",
    "You can't disappoint your family if they've never been proud of you in the first place.",
    "Before embarking on a journey, bring a good book.",
    "Every journey has its final day. Don't rush.",
    "any world without you is false",
    "Until he can be okay on his own... I can't die.",
];

// in certain cases, add the following 
// [username] iS nOw DrOwNinG iN An InDeScRiBaBlE emPtInEsS...

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fortune')
        .setDescription('Provides a daily dose of truth!'),
    async execute(interaction) {
        await interaction.reply(possibleFortunes[Math.floor(Math.random() * possibleFortunes.length)]);
    },
};