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
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5WUXZOiOBSG/0tusUYQBKSqq5YPRVAURVtlay8iBIx8J4DilP99i57u6bnYne29C0lxzpP3fU++g7zAFC1QB5TvoCS4hTXql3VXIqAArYkiRMAAhLCGQAHBIu8Me4pXjiFc52L6Op3dj/6GxZqf6CUZe/m8kkK4iHnrBTwHoGzOKQ5+U9AbSrNVhNT0VeM25RxT87Eu3fwy8qspY9fyFYdqIuyt8f72Ap59RYgJzuNpeUEZIjBdoM6FmHwNv7CDg+TKgrvmTtdZVsc1e7QWcp6hPZkdg8fItpa8eiD3UfI1/CQ0+VYLEZwWPHuZ5a6rnYdz9oEud2vLmNP77nHQeMGdd6cf+BTHOQqtEOU1rrsv657o27WEh8goFwmvTlrzdkhG41JK2zVr7Mlwl22syGeQ+Mp+DbwUoBcJrbu+rth02y3EZJVlvOOEpmGn4iObjPgDIy9n/j34FdwlH1lJ/o/uJzu1Dtu5yRzcu1UzDGRdRn8EBee2LL6sjgfiTGDbGt5r8TX89hAKZnATmdw8GQ+rNMMk1Kjhbeds2u3XmzQ+HWmaj4Vj8YkP64b8jnKj6swoe8D1dsJcu+Nd5CZGc7/yyd62Q2KM/GWUrM3hirb5Tucu6cQ/mdO7H2/8KURnyeVrNOV3jFitFnstGmvVdanqm5e3GyWos0KgcM8BICjGtCawxkXe7424AYBh66GAoPpNXbA7SkjnbqNNQDa6arLzjI8M93VGL2E8rmxaSY1wseYbY5W8gAEoSREgSlE4x7QuSOcgSmGMKFD+/GsAcnSvf/jWd+O5AYgwofU+b8q0gOGHqR+HMAiKJq+9Lg/0foEIUNjPbVTXOI9pL2OTQxJccIv0C6wpUCKYUvTzgoigECg1adDPodWLsNfdmSwXjjlbggHI3vzAIVDARJDYkSSPJoKocJM/6LdbXxWW5bcc1b2E7wT9DyGqIU4pUIDudFxzVrWp20DBkU1TdWJVj1XwSfzh/A9pT3lF50HD+EYCZdGfh8O7dpufXPmhmbt1VN7M4eL6qGjy6rz8QxGggIVzQLbgxlNx35ybre3LplqF6rlyUC54eqWWLRIgEo7L2GxXu2iF7HaGxZIfM+vJqD1Jr/tl5Q2HmWktIrIYWsz9asQvfbcQtThAvzbzd1JJimtLmP0UktQT8wsXmDvD9C4ptw48lC4rGITmauolvLPdyU4abSsqPu7LY04plaTUlm8zPz2fz/pR83QqzIz3TL7NRPr+FuG3uPRe9J8RRm+jncPeof/w5oO7TxD7HPxS4v2t+Jd50w62SDR+2Wabsdmusy0fyZtAGxlD57ZNHrkYaG1XyCKxZzvwfP41AGUK66ggGVAAzENS4BAMACmaPpJWHhW/aaar1FLjeNVfPIW0Vj9jvsMZojXMSqBwkiTJosCK4+ff5qUKgRsHAAA=',
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
  
