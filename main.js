const Discord = require('discord.js');
const{ prefix, token, gToken } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(gToken)



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

}

client.once('ready', () => {
    console.log('Ready')
})

client.on('message', message => {

    if(message.content.startsWith(`${prefix} ?`)){
        client.commands.get('pingQ').execute(message);
    }
    else if(message.content.startsWith(`${prefix} h`)){
        client.commands.get('pingh').execute(message);
    }
    else if(message.content.startsWith(`${prefix} !`)){
        client.commands.get('pingX').execute(message);
    }
    else if(message.content.startsWith(`${prefix} lolf`)){
        client.commands.get('pingLOLF').execute(message);
    }
    else if(message.content.startsWith(`${prefix} g?`)){
        client.commands.get('pingQG').execute(message);
    }
    else if(message.content.startsWith(`${prefix} jn`)){
        client.commands.get('pingJN').execute(message);
    }
    else if(message.content.startsWith(`${prefix} an`)){
        client.commands.get('pingAN').execute(message);
    }
    else if(message.content.startsWith(`${prefix} gn`)){
        client.commands.get('pingGN').execute(message);
    }
    else if(message.content.startsWith(`${prefix} cn`)){
        client.commands.get('pingCN').execute(message);
    }
   /* else if(message.content.startsWith(`${prefix} omw`)){
        client.commands.get('pingOMW').execute(message);
    }*/
    else if(message.content.startsWith(`${prefix} og`)){
        client.commands.get('pingOG').execute(message);
    }
})

client.login(token);