
const AWS = require('aws-sdk');

/**
 * sls invoke --function tx --data='{"some": "stuff"}'
 */
exports.handler = async (event) => {
  const eventBridge = new AWS.EventBridge({ region: process.env.serviceRegion });

  const detail = JSON.stringify(event);
  const result = await eventBridge.putEvents({
    Entries: [
      {
        EventBusName: process.env.eventBusName,
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
