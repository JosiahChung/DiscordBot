module.exports = {
  name: 'pingGN',
  description: "good night", 
  execute(message){
      const tagUser = message.mentions.users.first() || message.member.user;
      message.channel.send(`Good night @${tagUser.username} :sleeping::sleeping::sleeping::sleeping::sleeping:`);
    
 
  }

}