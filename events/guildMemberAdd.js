module.exports = (client, member) => {

    const settings = client.config.defaultSettings

    if (settings.welcomeEnabled !== "true") return;

    const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user);
    member.guild.channels.find("name", settings.welcomeChannel).send(welcomeMessage).catch(console.error);

    let serverMembers = member.guild.roles.find('name', settings.userRole);
    member.addRole(serverMembers)


};