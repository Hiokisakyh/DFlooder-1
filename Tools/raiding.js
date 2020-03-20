const Discord = require("discord.js");
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./tokens.json", "utf8"))
const token = config.tokens;
var print = console.green;

token.forEach(acc => {
    const client = new Discord.Client();
    client.on("ready", () => {
    client.user.acceptInvite(cache.invite)
print(`Joined ${client.user.tag}`)
})
    client.login(acc)
    });
