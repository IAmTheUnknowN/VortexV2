const config = {
    "ownerID": "257673064446164992",
    "coscripterID": "240965846480977920",
    "admins": [], // Do not touch
    "mods": [], // Do not touch

    "defaultSettings": {
        "prefix": "Vortex, ",
        "userRole": "Members",
        "systemNotice": "true",
        "modRole": "Moderator",
        "adminRole": "Administrator",
        "coownerRole": "Co-Owner",
        "welcomeChannel": "server-logs",
        "mutedlogs": "muted-logs",
        "kicklogs": "kick-logs",
        "banLogs": "ban-unban-logs",
        "welcomeMessage": "Welcome {{user}} To United Elite! Enjoy Your Stay :)",
        "welcomeEnabled": "true",
        "leavingMessage": "Goodbye {{user}} I Hope You Enjoyed. Its Sad To See You Go :(",
        "leavingEnabled": "true"

    },

    // PERMISSIONS

    permLevels: [
        {
            level: 1,
            name: "User",
            check: () => true
        },

        /*
        Trial Moderators level

        To be made at a later date; as with Trial Admins
        */

        {
            level: 2,
            name: "High Member",
            check: () => true
        },

        {
            level: 4,
            name: "Moderator",
            check: (message) => {
                try {
                    const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
                    if (modRole && message.member.roles.has(modRole.id)) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        /*
        Trial Administrator level
        */

        {
            level: 5,
            name: "Administrator",
            check: (message) => {
                try {
                    const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
                    return (adminRole && message.member.roles.has(adminRole.id));
                } catch (e) {
                    return false;
                }
            }
        },
        // {
        //     level: 4,
        //     name: "Server Owner",
        //     check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
        // },

        {
            level: 25,
            name: "Co Scripters",
            check: (message) => message.client.config.coscripterID === message.author.id
        },

        {
            level: 50,
            name: "Bot Owner",
            check: (message) => message.client.config.ownerID === message.author.id
        }

    ]
};

module.exports = config;