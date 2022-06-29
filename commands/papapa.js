const { SlashCommandBuilder } = require('@discordjs/builders');

/*
My cock is canon. (trigger: cock)
*cries in harem* (trigger: harem)
Huh, how do you know? Did I fuck you by accident? (can’t think of a trigger, maybe just random?)
Good evening ladies. I was ...ahem busy...You know what? Pei Ming never comes too early. (trigger: late)

*/

const advice = [
    "This one is for you Hua Chengzu, because it is called 'The Butterfly Flick': While bobbing on the head of his penis, twist your hands on the shaft of the penis and swirl your tongue around the corona(the ridge separating the shaft from the head, in case you don't know...). Then, lightly flick your tongue (hence the butterfly) back and forth across his delicate corona.",
    "So about todays sex tip... Surprisingly, today's advice is more for the receiving ends:(where are they by the way?) 'Tell him exactly WHAT you want, and WHEN you want it.' Just because that's frickin hot",
    "Go up the wall: give him a hot, wet kiss, rub your body against his and say, 'How about right here?'",
    "Ok, ok. Got it... Today I will teach you how to fake the deep throat. So pay attention: Stick the tip of your tongue on the roof of your mouth when bobbing on his penis.  This movement, coupled with the warm and wet feeling of your tongue, will make you feel like you're letting him in deeper in than you actually are.",
    "Listen: Always get his balls involved in the fun. " +
    "Don't forget about his balls! Pinch, tug, suck, lick, or do all three at once. Just try not to make it an afterthought. " +
    "Taking your time during foreplay to give them a good massage will drive him extra wild. ",
    "Today I realized I can't call my cock 'Little Pei'. But that's okay because it is incorrect anyway. ",
    "Don't forget other feel-good zones beyond his penis. " +
    "Gently rub his scrotum, or massage the area between the scrotum and anus. " +
    "The tailbone is also filled with nerve endings, so applying gentle pressure next time he's on top can make a world of a difference.",
    "Sit down together and share your sexual fantasies. " +
    "If you're uncomfortable talking about the ones you usually indulge in, make up some new ones. " +
    "Let your imaginations roam free.The caveat: Don't touch, just talk.",
    "Well, appropriate to the subject is today's tip: Want to go deep?" +
    "Pull your knees up to your chest, then spread them just wide enough for your husband to get between them. " +
    "With your calves on either side of his back, support his weight on the backs of your thighs. " +
    "If you want to move you can rock back and forth with him. Don't ask why I know...",
    "Today I'm exhausted, so: During foreplay and oral sex, make sure you rest a bit in between all the action.",
    "Take it slower than you think: " +
    "'Peaking', a technique in which you assume a slower-than-average pace during intercourse, can easily wind you both up for an ecstatic ending. " +
    "A constant, fast pace will dull your senses, but a slower rhythm will give your body time to adjust and allow the tension to eventually build up to even greater heights. ",
    "Pack a blanket, be discreet and go enjoy the great outdoors!",
    "Go for a sword fight session. " +
    "Yes, get in a more 'official' workout before the one going down between the sheets. " +
    "It'll help get you in the mood, as people get frisky after fighting swords a few rounds. " +
    "Because exercise increases blood flow all over, including those nether regions. Increased blood flow = more arousal.",
    "As you move up and down his shaft, turn your head a bit from side to side and let your tongue follow a corkscrew pattern. " +
    "When you get to the frenulum, be sure to lick it for a few seconds before moving all the way up to the top. " +
    "More than the textbook up-and-down motion, the unexpected side-to-side action will make him go.",
    "I personally like this one much: Don't just stroke your partners penis, stroke their ego.",
    "Play the amazing 'May I?' game. Why? Because consent is sexy! " +
    "She asked if she could run her hands over my chest. Of course, I said yes, but I was kind of thinking, Why so formal? " +
    "Then she asked if she could kiss my nipples. After that, she requested permission to undo my pants. " +
    "She wondered if I'd mind if she gave me oral sex. Before every move she made, she asked for my consent. " +
    "I got more and more turned on with each question. " +
    "Part of it was hearing what she was going to do to me next, and part of it was the idea that I was actually granting her favors, like she wanted it so badly but needed my okay.",
    "Place your lips an inch away from his ear and release a slow sigh, which will tantalize his nerves without going overboard. " +
    "Then take his earlobe between your lips and gently tug, which will pull at the nerve endings inside the ear. " +
    "These nerves are almost never stimulated, so you'll really blow his mind when you do this.",
    "I bet you don't see this one coming: Keep your panties on. " +
    "'Why?', do you ask ? " +
    "It's simple: It is pleasurable torture to play with each other over your underwear, teasing and stroking through the fabric. " +
    "You're building up the anticipation, so when you finally do have skin-on-skin contact, it'll be that much more explosive and exciting.",
    "Here we go, another Pei Ming approved BJ tip: Flatten your tongue and pretend you are licking a delicious ice cream cone. " +
    "Then try the 'pointy-tongue' technique to stroke up and down and side to side. " +
    "Do different strokes and touches, like flicking your tongue over the head, and see what kind of response you get.",
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('papapa')
        .setDescription('The Great Pei Ming Has Advice...'),
    async execute(interaction) {
        if (interaction.channel.parentId === '983420971765628929') {
            await interaction.reply(advice[Math.floor(Math.random() * advice.length)]);
        } else {
            await interaction.reply("These are Secrets Men Aren't Meant to Know.");
        }
    },
};
