'use strict';

const pester = async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  await say(`No you, <@${command.user_name}>!`);
};

module.exports = pester;
