exports.up = function (knex) {
  return knex.schema.createTable('followers', function (table) {
    table.bigIncrements('id').primary();
    table.bigInteger('user_id').unsigned().notNullable();
    table.bigInteger('followed_id').unsigned().notNullable();
    table.unique(['user_id', 'followed_id']);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('followers');
};
