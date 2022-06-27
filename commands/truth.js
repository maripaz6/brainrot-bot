const { SlashCommandBuilder } = require('@discordjs/builders');

const truths = [
    "TODO"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('truth')
        .setDescription('Honestly is essential in a relationship.'),
    async execute(interaction) {
        await interaction.reply(truths[Math.floor(Math.random() * truths.length)]);
    },
};