  const express = require('express');
  const app = express();
  const { Client, Collection, MessageActionRow, MessageButton, MessageSelectMenu, Modal, TextInputComponent, MessageEmbed } = require("discord.js");

  app.get('/', (req, res) => {
    res.send('Hello Express app!');
  });

  app.listen(3000, () => {
    console.log('Mars Team');
  });

  const client = new Client({
    intents: 32767
  }).setMaxListeners(0);

  client.on('ready', async () => {
    console.log(`================`);
    console.log(``);
    console.log(`Bot Name : ${client.user.username}`);
    console.log(`Bot Tag : ${client.user.tag}`);
    console.log(`Bot Id : ${client.user.id}`);
    console.log(`Servers Count : ${client.guilds.cache.size}`);
    console.log(`Users Count : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
    console.log(``);
    console.log(`================`);

    client.user.setActivity('BORDERLAND', { 
      type: 'STREAMING', 
      url: 'https://www.twitch.tv/your_twitch_channel' 
    });
  });

  const taxchannel = "1259856867237040249"; // Channel ID

  process.on("unhandledRejection", error => {
    console.log(error);
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;

    let args = message.content.trim();

    if (args.endsWith("m") || args.endsWith("M")) args = args.replace(/m/gi, "").replace(/M/gi, "") * 1000000;
    else if (args.endsWith("k") || args.endsWith("K")) args = args.replace(/k/gi, "").replace(/K/gi, "") * 1000;
    else if (args.endsWith("b") || args.endsWith("B")) args = args.replace(/b/gi, "").replace(/B/gi, "") * 1000000000;
    else args = parseInt(args);

    if (isNaN(args)) {
      return message.reply('> **Error: It Must Be A Number ⚠⚠**');
    }

    if (args < 1) {
      return message.reply('> **Error: It Must Be Larger Than 1 ⚠⚠**');
    }

    const tax = Math.floor(args * 20 / 19 + 1);
    const tax2 = Math.floor(args * 20 / 19 + 1 - args);
    const tax3 = Math.floor(tax2 * 20 / 19 + 1);
    const totalTax = Math.floor(tax2 + tax3 + args);

    await message.reply(`> **Your Tax Is: __${tax}__** ✔`);
  });

  client.login(process.env.token);
