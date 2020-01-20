
exports.up = function(knex) {
  return knex.schema
    .createTable('notes', table => {
      table.increments();
      table.string('title').notNullable();
      table.text('content').notNullable();
    })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('notes');
};
