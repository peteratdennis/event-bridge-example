
const AWS = require('aws-sdk');

/**
 * sls invoke -c serverless-other-tx.yml --function othertx --data='{"src": "other"}'
 */
exports.handler = async (event) => {
  const eventBridge = new AWS.EventBridge({ region: process.env.serviceRegion });

  const detail = JSON.stringify(event);
  const result = await eventBridge.putEvents({
    Entries: [
      {
        EventBusName: process.env.eventBusArn,
        Source: 'dennis.experimental.event',
        DetailType: 'Demo',
        Detail: `${detail}`,
      },
    ]
  }).promise();

  return {
    result,
  };
};
