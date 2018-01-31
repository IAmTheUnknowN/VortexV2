module.exports = client => { 
client.on('disconnect', () =>{
    console.log(`You have been disconnected at ${new Date()}`)
  });

}