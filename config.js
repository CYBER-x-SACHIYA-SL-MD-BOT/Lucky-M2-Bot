/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['+94702782946','+94702782946'], // Add your number without + or spaces (e.g., 256789966218)
    ownerName: ['ᴄʏʙᴇʀ x ꜱᴀᴄʜɪʏᴀ', '🐼 ᴄʏʙᴇʀ ᴘᴀɴᴅᴀ ᴍᴅ 🐼'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Lucky M2 Bot',
    version: '1.5.0',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5VUXZOiOBT9L3ltawAFRKu6ahVpRBER5UO39gEhxCBfkhDFKf/7Fvb09Dzszva+haQ499xzzr3fQVFiApewBePvoKoxCynsjrStIBiDaZMksAY9EIc0BGOgv80SmvioURWTVScNG/Z+H8nrwc7ur4XSC4f60PMyHHjKK3j0QNUcMxz9BpCiu9vaLFlEnpFAOGLOZXVXDLkUdc7EXpSYF1+0kDQ/rV7Bo0MMcY0LpFUnmMM6zJawtUNcf42+NrVj9Faes0rZ7keDtkrYhlUNs3SlnY989b4kKd4Ph0tX/Bp9cmNLkxzJaHVCy9tLUkwyZblPtg5vVfyW3bgF4Rb60a/R5p0+waiAsRHDgmLafln33IpZ66bRXR/MUg1tHdsMLkbheHmq+G7uSxySUrQzbxr5GnEtvtAzk3XblmSz70jRLjsxvb9wEky4c0pc4yYX9f7g8sqvxO36Iyvn/6N7+GaJ3ttCXoX8Zi9bgpzNy8kyvdt8QZWoulyTbLpi80vCR1+MTcid7cz3PYR3040z4dOZsZ6ngXUsNsXaPV5TXZYtU7Gu6JN+SJv6dyyL0+olOgtzuLqdZyNlVvDmLZYWdWi09iJjdzcIvM2Kuv6NmqJIVLXxp0jJ0/N+wC3niccaZ5Xw5vygcrx3GHELZFtT9Prs6AxbIwZj4dEDNUSY0DqkuCyed5LUA2HMtjCqIX3KC9ILDB25z72oV3/YrrSpJIjehfHH+BgI6SQuF/mGnV/80+r6CnqgqssIEgLjOSa0rNsVJCREkIDxn3/1QAFv9N24rtxA6IEE14S6RVNlZRh/uPrxGEZR2RR02xaR2h1gDcb85zWkFBeIdDo2RVhHJ8ygegopAeMkzAj82SGsYQzGtG7gz6lVy7gTXjD7M8ubiqAH8qchOAZjMBKHMt/v87zUH/flP8i3a4caVtW3AtJOwx8Muh9iSEOcETAGqt1oZCFqmrGWZaLo+sRAExVNwCfjD+vfpS127FKgebyd6aUsIV6RUX54i9Mjb+fTgK2jzfziBt5O1/jXfwDpwrc8DvduXk6OvsVkkbkOD+1WUSfnkyjox606PSZXttz071izihFC1xUOBKQIu+tbrolepF7uPicqs+pl4wTr+8wdcs+c9EAMGY7gr8XUoCIBzyQrXU5QcJallwNzji6/MN0gU0/sHnsh0erDwNwZN2mnlRvOMjRpi+XrpbypKke3SrkX1pHftonHXEcLVPX6HsrnUGQ/lhF+xqXzovtMMHzOdhF2Dv2HNx+8uwTxj94vED+Wxb8M3PTAD+VKnA5cdLusm71lr8tF7gT7/mgmIW94L7SpnL0J7u1kgcfjrx6ospAmZZ13O6WI6xLHoAfqsukiaRRJ+Zti6uRsTK7I7BrPQkInnzHf4RwSGuYVGAvDocIPBEURHn8DgpcjPRwHAAA=',
    newsletterJid: '120363420656466131@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/Tomilucky218/Lucky-M2-Bot/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Lucky M2 Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: true,
    autoRecording: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'all', // set bot or all via cmd
    autoDownload: false,
    
    // Auto Reply
    AUTO_REPLY: true,
   
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Africa/Kampala',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/Tomilucky218',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@LUCKYTECHHUB'
    }
};
  
