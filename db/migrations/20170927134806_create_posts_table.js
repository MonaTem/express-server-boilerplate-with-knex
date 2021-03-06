exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('posts', function (table) {
      table.increments('id')
        .primary();
      table.text('body')
        .notNullable();
      table.bigInteger('user_id')
        .notNullable()
        .unsigned()
        .index()
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table.string('title')
        .notNullable();
      table.timestamps(true, true);
    })
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
  };
