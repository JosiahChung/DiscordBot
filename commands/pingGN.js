module.exports = {
  name: 'pingGN',
  description: "good night", 
  execute(message){
    message.channel.send(message.author + 'say good night :sleeping:') 
  }

}