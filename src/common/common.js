
// COMMON HTTP REQUEST HANDLER
const httpRequest = (router, requestMethod, requestUrl) => {
    if (requestMethod === 'GET') {
      router.get(requestUrl, (req, res) => {
        res.send('Hello from GET route');
      });
    } else if (requestMethod === 'POST') {
      router.post(requestUrl, (req, res) => {
        res.send('Hello from POST route');
      });
    } else {
      // Handle other HTTP methods if needed
      router.all(requestUrl, (req, res) => {
        res.send(`Handled ${requestMethod} request`);
      });
    }
  };
  
  module.exports = httpRequest;
  