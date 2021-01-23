const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.login(auth.key);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if (!msg.guild || !msg.member) return; //訊息內不存在guild元素 = 非群組消息(私聊)
    if (!msg.member.user) return; //幫bot值多拉一層，判斷上層物件是否存在
    if (msg.member.user.bot) return; //訊息內bot值為正 = 此消息為bot發送


    if (msg.content === 'hi') {
        msg.channel.send('hey');

    }
});


