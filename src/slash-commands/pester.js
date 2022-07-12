'use strict';

const pester = async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  await say(`No you, <@${command.user_id}>!`);
};

module.exports = pester;
