module.exports = {
  name: 'pingCN',
  description: "good night (C)", 
  execute(message){
    const tagUser = message.mentions.users.first() || message.member.user;
    message.channel.send(`@${tagUser.username}:sleeping::sleeping::sleeping::sleeping::sleeping::sleeping::sleeping::sleeping::sleeping::sleeping:`) 
  }

}