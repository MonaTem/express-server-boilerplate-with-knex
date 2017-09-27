exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};

exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id').primary();
      table.string('email')
        .unique();
      table.timestamps(true, true);
      table.string('alias', 'char(30)')
      .unique()
      table.string('hashed_password', 'char(100')
      .notNullable()
    })
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
