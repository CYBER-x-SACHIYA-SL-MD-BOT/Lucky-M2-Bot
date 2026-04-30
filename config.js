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
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5WVWZOiSBSF/0u+arSCimhERQyLglgI4gI6MQ8JJJgii7kg2uF/n6Cqq6sfZnpq3pIkuPndc85NvoOixBQt0R1Mv4OK4Boy1C7ZvUJgClSeJIiALoghg2AKRBV3BnXEm228O+3hToiX+dG2qrqp89tC7ASHQG3kVe/kly/g2QUVDy84+k1BjZnivMCPkGRuFckZpGY4owHvkUc68hbHPbut+4+TUJqLF/BsK0JMcJHOqhPKEYGXJbq7EJOv4e+cJQ9cyfapVlYTSd5ZzakPRXGWSGlm6fRsaDffNfY3c/01fDPhq7oMR4vjzhO0iDcackp1V+hi4TX7cKImE2mNNpAGt3d8itMCxYsYFQyz+5d19x37CrV5JNxO9wbXKcyc2o56cMtJ/7h259Ba8E4+9q5i+jVwrBy8XdjsrZpN/MXdHyjzUb9nji/mviaT5Sw0XOF1e9XlTfQruEs+spL9H919e8h5voanu65p/YOebDqWe49ew1nNTzV0ypVLb4PmoF76X8OX65F9Gx5lvtjsqnymyz6e8Kg6PKCrSKO9kbDNRlz3k722/sSHjJPfUbJhuInxTF1VaW80j8LdXbE3+l4Zk60nO33LU05l6jx87rCzDZO8PidC7aCJOnvsPen1vHAOmUPMrRH7j2HWUyniSFFe3jrK0H0Rg6nw7AKCUkwZgQyXxdue1AUwrjcoIoi9qQv0Qb6oekEqsjMcvjZjv3y1sM+9krKVb1oTz0rOj92BD+zDC+iCipQRohTFJqasJHcbUQpTRMH0z7+6oEANe/etPW0gdEGCCWW7gleXEsYfpn68hFFU8oJt7kWktQtEwLT/uY0Yw0VKWxl5AUl0wjXSTpBRME3ghaKfDSKCYjBlhKOfQ6uVcau7Jo+Oa1mZgy7I3/zAMZiCyXDcF8eyOBlKU2HwB/12a6vCqvpWINZK+IOg/SBGDOILbWvZXOChos6cwHhEsmEoaapoqQI+iT+cf5f2UFypGfHOUc+gLB3NuNeoN/Pgyg/V2DpJdTN6y/PjSrO9/fIPRcAUBNm22ls6WWae3LfwbkeCIRuJxuF6P57MzFZDfpZuNbS2ndvZSoORVhLdClR0Up3JVmwGa9tUVsGSj+bzuOdb6UQN9DYmXRCjGkfo18Mk28t7ZJUYftZUoYuD/nx0jtGkqZoq7BySAbzKviqq3FXr5UJI8L5JdPFa2quVILjlRp1YncPM2HYGiTNTI2FoB5mevmfybSYuP+4i/BaX1ov2McHobbQL2Dr0H958cLcJ6j+7v5T4cVf8y7ypviURdfBa5+uRUTu5N0jkdaSKes++edmjkCK1vpeyRKz5Fjyff3VBdYEsKUkOpgAWMSlxDLqAlLyN5KJIyt/9aBS6UNJ01TZ+gZQpnzHf4hxRBvMKTIXxeDwayYOx/PwbdonbnxsHAAA=',
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
  
