/* eslint-disable no-console */
const request = require('request');
const chalk = require('chalk');

module.exports = (packageTag, success) => {
  const slackToken = process.env.SLACK_TOKEN;

  if (slackToken) {
    const message = success
      ? 'has been published successfully!'
      : 'failed to publish';

    const color = success ? '#36a64f' : '#c30e0e';

    const text = `${packageTag} ${message}`;

    const options = {
      method: 'POST',
      url: `https://hooks.slack.com/services/${slackToken}`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        attachments: [
          {
            fallback: text,
            color,
            text,
          },
        ],
      }),
    };

    request(options, error => {
      if (error) {
        console.log(chalk.red('\nError! Unable to publish slack notification'));
        console.log(error);
      }
    });
  } else {
    console.log(
      chalk.red(
        '\nError! Slack token not provided! Please ensure environment variable SLACK_TOKEN is present',
      ),
    );
  }
};
