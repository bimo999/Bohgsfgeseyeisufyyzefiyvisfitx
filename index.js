const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3000, () => {
  console.log('Mars Team')
});

const { Client, Collection , MessageActionRow , MessageButton , MessageSelectMenu , Modal , TextInputComponent , MessageEmbed } = require("discord.js");

const client = new Client({
  intents: 32767
}).setMaxListeners(0);

client.on('ready' , async() => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot Name : ${client.user.username}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  console.log(``)
  console.log(`================`)
var timers = 2;
  var timeing = Math.floor(timers * 1000);
  client.user.setActivity(`Crystal S`, { type: 'WATCHING' });
})

let taxchannel = "1259856867237040249"//ايدي الشنل

 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 

client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let m = await message.reply({ content: `
> ** Your Tax Is : __${tax}__**`✔ });
})

                            client.login(process.env.token);