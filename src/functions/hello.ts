export const test = async event => {
  return {
    statusCode: 200,
    message: 'Hello World',
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
