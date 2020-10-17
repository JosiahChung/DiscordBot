const giphyJsSdkCore = require("giphy-js-sdk-core")

module.exports = {
  name: 'pingQG',
  description: "WHAT IN THE WORLD YOU DOING(with a gif)", 
  execute(message){
    message.channel.send('http://gph.is/2BFd19i')
    
  }

}