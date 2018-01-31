module.exports = client => {
    client.on(`ready`, function () {
        console.log(client.commands);
        setTimeout(function(){
            console.log(`Booting Into Version 0.1.6`)
         },500);
         setTimeout(function(){
           console.log(`Now With Muting! Do Vortex, mute @{usernameHere}`)
         },1000);
    });
}