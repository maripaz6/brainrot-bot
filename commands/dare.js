const { SlashCommandBuilder } = require('@discordjs/builders');

const dares = [
    "A small spoon full of coffee powder, in the maw, and gulp. Wash it with a shotglass of water ALONE",
    "Feet pic go",
    "Go up to a random person and say 'hi'"
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dare')
        .setDescription('Thinking of something stupid...'),
    async execute(interaction) {
        await interaction.reply(dares[Math.floor(Math.random() * dares.length)]);
    },
};