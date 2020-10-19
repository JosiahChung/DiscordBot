module.exports = {
  name: 'pingJN',
  description: "Good night (J)", 
  execute(message){
    const tagUser = message.mentions.users.first() || message.member.user;
    message.channel.send(`@${tagUser.username}:ghost::ghost::ghost::ghost::ghost::ghost::ghost::ghost::ghost::ghost:`) 
  }

}