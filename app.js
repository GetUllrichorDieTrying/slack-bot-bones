'use strict';

const { App } = require('@slack/bolt');

require('dotenv').config();

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.TOKEN,
});
// Functionality added here

// Start app
(async () => {
  await app.start(process.env.PORT || 3002);
  console.log('Bolt app is running');
})();
