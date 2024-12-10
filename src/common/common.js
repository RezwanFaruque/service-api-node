
// COMMON HTTP REQUEST HANDLER
const httpRequest = (router, requestMethod, requestUrl,callback) => {
    if (requestMethod === 'GET') {
      router.get(requestUrl, (req, res) => {
        callback(req,res);
      });
    } else if (requestMethod === 'POST') {
      router.post(requestUrl, (req, res) => {
        callback(req,res);
      });
    } else {
      // Handle other HTTP methods if needed
      router.all(requestUrl, (req, res) => {
        callback(req,res);
      });
    }
  };
  
  module.exports = httpRequest;
  