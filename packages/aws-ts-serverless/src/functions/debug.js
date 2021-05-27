const handler = () => {
  try {
    const x = 10;
    const response = {
      statusCode: 200,
      body: 'HELLO YOU ARE MY FRIEND!!!',
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
      body: 'An error occured',
    };
  }
};

module.exports = {
  handler,
};
