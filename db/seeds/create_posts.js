const bcrypt = require('bcrypt-as-promised');

exports.seed = (knex, Promise) => {
  return bcrypt
    .hash('socure', 12)
    .then((digest) => {
      return knex('users').insert({
        email: 'joe@joe.com', hashed_password: digest
      });
    })
    .catch(() => {
      console.log('FAILED BECAUSE USER EXISTS ALREADY')
    })
};
