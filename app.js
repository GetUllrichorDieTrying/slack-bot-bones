'use strict';

const { App } = require('@slack/bolt');

require('dotenv').config();
const PORT = process.env.PORT;

// Bring in app
const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.TOKEN,
});

// Function imports
const homePage = require('./src/homePage');

// Home page
app.event('app_home_opened', homePage);

//

app.command('/pester', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  await say(`No you, <@${command.user_name}>!`);
});

app.error((error) => {
  // Check the details of the error to handle cases where you should retry sending a message or stop the app
  console.error(error);
});

// Start app
(async () => {
  await app.start(PORT || 3002);
  console.log('Bolt app is running on', PORT);
})();
