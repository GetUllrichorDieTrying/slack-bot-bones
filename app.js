'use strict';

const { App } = require('@slack/bolt');

require('dotenv').config();
const PORT = process.env.PORT;

// Bring in app
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_TOKEN,
});

// import Home Page
const homePage = require('./src/homePage');

// import slash commands
const pester = require('./src/slash-commands/pester');
const duetoday = require('./src/slash-commands/duetoday');

// Home page
app.event('app_home_opened', homePage);

// Commands
app.command('/pester', pester);
app.command('/duetoday', duetoday);

// Error logging
app.error((error) => {
  console.error(error);
});

// Start app
(async () => {
  await app.start(PORT || 3002);
  console.log('Bolt app is running on', PORT);
})();
