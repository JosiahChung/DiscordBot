module.exports = {
  name: 'pingAN',
  description: "good night (A)", 
  execute(message){
    const tagUser = message.mentions.users.first() || message.member.user;
    message.channel.send(`@${tagUser.username}:whale::whale::whale::whale::whale::whale::whale::whale::whale::whale:`) 
  }

}