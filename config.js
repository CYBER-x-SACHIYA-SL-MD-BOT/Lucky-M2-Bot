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
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5VUW5OiOBj9L3ltaxREAau6ahFFEfGKQrs1DwECBLmZhJtT/vcp+jI9D7uzvTyFQJ2c71zyA2Q5pshALZj8AAXBFWSoW7K2QGACpmUQIAJ6wIcMggnI52NKU9NBvgxDT76MM689Mk6DNhH5tdfou/T6Imnns7N/Bo8eKEo3wd4fAFmwH3G8fB2KrD0Pm1IVNJgw04j69nK8FlItoFupNozlwXwGjw4RYoKzcF5EKEUEJgZqdxCTr9FXN8V0gOecSNZZ33o6xy+2kfhMG6QJnI/Ss2Xt/EK836kjfI2+sD0G0dg4nuQL5M9iHO3cLF/QAd5borml3K2ZJpfbNsuU6xt9isMM+bqPMoZZ+2Xd61VBF/zL5p7zu4BY7rjScOscrLNxwv7eWishje+NM2pOyteIa24eU0vfzG/T8FSn3tTJjWjoCoPhWb+7wWK950UlnTmGvf+d+I58ZOX6f3Tf6nMIN4NSVPKikbVRs0jP+Brdhj4O22tsj6rldmfE3HggfY3+EGnq/nwQ9knzNBWkHb2fm0RdkNic2u2hvtjzvnGITovxUPqkD1lJ/piO+n4QpJVle8riXM7su7hXj46Z2MhxCnJaCflVXZe5qvs7j7f7NgoNqV0/xc6JP97raeHpcZ6kt35cHez54qg3ig/V8Pl1oitqdR9MuEcPEBRiyghkOM+6PVHqAehXR+QRxF7VBZAUd8jZs2EUUSTetUouw7wq9NNsc6lLW/JOBafaTkMi7xn0QEFyD1GK/CWmLCetiSiFIaJg8vf3HshQw958604bcj0QYELZKSuLJIf+h6kfH6Hn5WXGjm3mqd0CETAZfG4jxnAW0k7GMoPEi3CF1AgyCiYBTCj6NSAiyAcTRkr0q7Rq7ne6m7y5MyVtCXogffUD+2ACZEEcD3h+MBjxE076i36rO1RYFN8yxEAPZLD7GRyhF2EWdZq+U+oQfMQgTmhnormVnkRzPt/sNOpJi4VyChU1VMDnCB9ReNN6vDGefC8fH9zzzOFHaSHP80BoZlUimX1u2EgvxmxVO3Wqmc//AAImAA1HVbPvt0nZBlZ7q7XYzxzXOtjuqtCbG4Yz2fWll6bA/XpGRtMd52xl+56Z3mVjpbYQXDbmoeaaC1+08d7TElabyv65O81HFfbQ74dtKtkOlgupGcpJCQOmEk6JVuPQdcvz1ZZh8iKRS3XMYMPP0kS504ZTbebZeLXS77w7YjshvArznBWRENfq4mJkiaK8hfS1JMn75YRf89OZ070GGL12/d2F/zLrjXcXqcGj9xvE++XxLwWcovhYZY6xvdrcnpPLyy04GMsncy+OgtlO9qVgoYatp0mryAKPx/ceKBLIgpykYAJo6kLQAyQvu4DqWZD/qerKVVfqcN1NnUDKlM/QWzhFlMG0ABNOFMWBLAsS1wNpqxTFkUH20RWgdM9aP4HHT1scvudGBwAA',
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
  
