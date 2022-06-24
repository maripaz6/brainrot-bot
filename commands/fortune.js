const { SlashCommandBuilder } = require('@discordjs/builders');

const fortunes = [
    'You will have a shitty day, dog fucker.',
    'Truly, the higher you climb, the harder you fall.',
    'Life is full of surprises; one cannot escape whatever that comes.',
    'Fortunes are hard, so fuck off.',
    'To truly find yourself, play hide-and-seek alone.',
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
    "A disciplined mind brings happiness",
    "The root of suffering is attachment",
    "Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame",
    "One who conquers themself is greater than another who conquers a thousand times a thousand men on the battlefield.",
    "You cannot travel the path until you have become the path itself.",
    "They who knows all the answers has not been asked all the questions",
    "Before you embark on a journey of revenge, dig two graves.",
    "It is more shameful to distrust our friends than to be deceived by them."
];

const named_fortunes = [
    "If you die again, [TK] will kill you.",
    "[TK] iS nOw DrOwNinG iN An InDeScRiBaBlE emPtInEsS..."
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fortune')
        .setDescription('Provides a daily dose of truth!'),
    async execute(interaction) {
        const useNamed = Math.random() * (fortunes.length + named_fortunes.length) < named_fortunes.length
        if (useNamed) {
            // TODO figure out why only me, Jewsie, and bot are in cache
            let randomUser = interaction.guild.members.cache.random();
            const fortune = named_fortunes[Math.floor(Math.random() * named_fortunes.length)];
            await interaction.reply(fortune.replace("[TK]", randomUser.user.username));
        } else {
            await interaction.reply(fortunes[Math.floor(Math.random() * fortunes.length)]);

        }
    },
};