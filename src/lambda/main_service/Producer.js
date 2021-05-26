
const AWS = require('aws-sdk');

/**
 * sls invoke --function Producer --data='{"some": "stuff", "foo": "bar"}'
 *
 * The above will match the pattern for both functions Consumer & ConsumerTwo
 * The cool part is that
 * sls invoke --function Producer --data='{"some": "stuff"}'
 * will only trigger the Consumer function _NOT_ ConsumerTwo
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
