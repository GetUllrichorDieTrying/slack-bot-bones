'use strict';

const homePage = async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({
      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: 'Enter you API key and Class ID below',
              emoji: true,
            },
          },
          {
            dispatch_action: true,
            type: 'input',
            element: {
              type: 'plain_text_input',
              action_id: 'plain_text_input-action',
            },
            label: {
              type: 'plain_text',
              text: 'Label',
              emoji: true,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = homePage;
