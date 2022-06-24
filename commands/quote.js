const { SlashCommandBuilder } = require('@discordjs/builders');
const quotes = [
    "Good night, Mo Ran",
    "haru na no ni",
    'Osmanthus wine tastes the same as I remember. But where are those who share the memories?',
    "My name is Yoshikage Kira.",
    "Can't say no homo in your second life.",
    "Witness the power of Guhua!",
    "You will join the grave of the Deep Fried Empress Song.",
    "There was Fuxi in heaven, Yanluo in hell, and in the mortal realm, there was Mo Ran.",
    "May my final stand be a monument to chivalry.",
    "an apple a day keeps deez nuts at bay ~ Josie",
    "May knowledge guide you.",
    "Shizun...Please, I can't take it anymore...",
    "Two lifetimes - they belong to you. No regrets.",
    "The endless steps stained with blood, that was the path he took to take you home.",
    "In my previous life, in this life, I've always loved you. In the future, I'm also willing.",
    "Drink the wine he drank, endure the pain he endured.",
    "Everyday means everyday :dickslap:",
    "Ge... we don't have a shizun anymore.",
    "We are the heirs to the throne of love! Battle Lovers!",
    "Go somewhere that will welcome you... this time no matter where you want to go, this master will accompany you.",
    "Only after having met you did I rediscover that it’s such a simple thing to be happy",
    "Your Highness I understand your everything. Your courage, your dispair; your kindness, your pain; your resentment, your hate; your intelligence, your foolishness",
    "GAINS OVER SHAME. MONEY OVER LIFE. HA HA HA.",
    "Body in abyss, heart in paradise.",
    "If I can't be a prince, I will be a horse",
    "What does freedom really mean, when demanded of you by a god?",
    "I just think we're missing out if we're not trying different things and having fun. Life's too short.",
    "It's no one's business to decide who's weak or strong.",
    "Ho ho.",
    "Ho ho.",
    "Ho ho.",
    "Once the snow is thick enough, we can eat it",
    "Everything that's happened in the past, I'll repay it all to you today.",
    "I am... not interested, little sun. Try again when you have become a man.",
    "Give up on your dreams and die.",
    "Those who can't abandon anything, can't change anything.",
    "After all, miracles happen everyday, do they not?",
    "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
    "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    "Come on, let's get moving. We're not frozen in place, after all.",
    "Once you've all witnessed the wrath of the spiked butt...",
    "Hell is too cold, I came to die with you."
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Brainrot at its finest!'),
    async execute(interaction) {
        await interaction.reply(quotes[Math.floor(Math.random() * quotes.length)]);
    },
};