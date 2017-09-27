const CryptoJS = require('crypto-js');

const HEADER_FORMAT = /^Basic\s(\w+={0,2})$/;  // OUR HEADER FORMAT
const CREDENTIALS_FORMAT = /^(.*):(.*)$/; // our limited credentials parsing

exports.BasicAuthCredentials = (req, res, next) => {
  const authHeader = req.get('Authorization'); // Get the Header value
  const matches =  HEADER_FORMAT.exec(authHeader);

  if (authHeader && matches) {
    const userPassEncoded = matches[1]; // Base64 encode value
    const words = CryptoJS.enc.Base64.parse(userPassEncoded); // Decode payload
    const credentialsRaw = CryptoJS.enc.Utf8.stringify(words); // stringify words
    console.log(authHeader);

    const credentialMatch = CREDENTIALS_FORMAT.exec(credentialsRaw); // useranme:password

    if (credentialMatch) {
      req.credentials = {
        email: credentialMatch[1],
        password: credentialMatch[2]
      };

      next();
    } else {
      res.status(401).set('WWW-Authenticate', 'Basic realm="Reddit Clone"').end()
    }
  } else {
    res.status(401).set('WWW-Authenticate', 'Basic realm="Reddit Clone"').end()
  }
}
