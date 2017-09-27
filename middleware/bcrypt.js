const bcrypt = require('bcrypt-as-promised');

// To be used when knex and credentials are available on the req:
exports.Authenticate = (req, res, next)=>{
  req.knex('users')
    .where({email: req.credentials.email})
    .first()
    .then((user) => {
      console.log('USER', user);
      return bcrypt.compare(
          req.credentials.password,
          user.hashed_password
      ).then(() => user);
    })
    .then((user) => {
      req.user = user;
      next()
    })
    .catch(() => {
      res.status(401)
        .set('WWW-Authenticate', 'Basic realm="Reddit Clone"')
        .end();
    })
}
