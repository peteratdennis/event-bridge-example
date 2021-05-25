
/**
 * Invoked by the event bridge.
 */
exports.handler = async (event) => {
  console.log(event);
  return {
    event,
  };
};
