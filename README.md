# Event Bridge Example

Using AWS Event Bridge

Useful links:
- https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html
- https://www.serverless.com/framework/docs/providers/aws/events/event-bridge/
- https://www.serverless.com/blog/eventbridge-use-cases-and-tutorial
- https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EventBridge.html#putEvents-property

## Deploy

Build the dependencies: `yarn`

First deploy the infrastructure (the custom event bus).
- export a name for the service: `export EVENTBRIDGE_EXAMPLE_INFRA_SERVICE=my-eventbridge-infrastructure`

Then the functions that use the bridge can be deployed.
- export a name for the service: `export EVENTBRIDGE_EXAMPLE_SERVICE=my-eventbridge`
- deploy: `yarn deploy`

Examples of using the event bus and events being consumed by all consumers in the various stacks
are provided in `sls-a.yml` and `sls-b.yml`.

## Functions

`yarn sls invoke --function Producer --data='{"some": "stuff", "foo": "bar"}'`
will cause both the functions `Consumer` & `ConsumerTwo` to be called.

`ConsumerTwo` is configured to only trigger if the event (--data)
contains `foo` with a value of `bar` so
`yarn sls invoke --function Producer --data='{"some": "stuff"}'`
will only trigger the `Consumer` function _NOT_ the `ConsumerTwo` function.


### sls-a
Calling the producer in the `sls-a` stack will trigger the event listeners in the other stack(s)
`yarn sls invoke -c sls-a.yml --function ProducerA --data='{"src": "service A"}'`
