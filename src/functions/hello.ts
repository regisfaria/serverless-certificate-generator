export const handle = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
