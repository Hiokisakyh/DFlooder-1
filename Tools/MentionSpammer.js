const Discord = require("discord.js");
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
const print = console.log

token.map(acc => {
    const client = new Discord.Client();
    client.on("ready", () => {
    setInterval(() => {
        
    
    if(cache.dm == "off") {
client.guilds.get(cache.serverid).channels.get(cache.channelid).send(`<@${cache.mention}>`)
print("Spamming Mentions ..")
    }
    if(cache.dm == "on") {
        client.users.get(cache.userid).send(`<@${cache.mention}>`)
        print("Spamming Mentions ..")
            }
        }, cache.delay);
})
    
    client.login(acc);
    });
