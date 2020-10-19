const giphyJsSdkCore = require("giphy-js-sdk-core")

module.exports = {
  name: 'pingLOLF',
  description: "League Funny(with a gif)", 
  execute(message){
    giphy.search('gifs', {"q": "league of legends funny"})
        .then((response) => {
            var totalResponses = response.data.length;
            var responseIndex = Math.floor((Math.random() * 100) + 1) % totalResponses;
            var responseFinal = response.data[responseIndex];

            message.channel.send({

                files: [responseFinal.images.fixed_height.url]

            })
          
          .catch(()=>{
            message.channel.send('crap!!')
          })
        }) 
  }

}