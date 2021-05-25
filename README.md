# Event Bridge Example

Using AWS Event Bridge

Useful links:
- https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html
- https://www.serverless.com/blog/eventbridge-use-cases-and-tutorial
- https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EventBridge.html#putEvents-property

## Deploy

- export a name for the service: `export EVENTBRIDGE_EXAMPLE_SERVICE=my-eventbridge`
- build the dependencies: `yarn`
- deploy: `yarn deploy`

## Functions

### tx
The tx function sends an event to the bus with the custom source of `dennis.experimental.event`

### rx
The rx function is the event listener, it just logs the event to the console.
