/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user_link', table => {
    table.increments();
    table.string('link_type', 250);
    table.integer('user_id');
    table.foreign('user_id').references('user_data.id');
    table.integer('movie_id');
    table.foreign('movie_id').references('movie.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return (
    knex.schema.alterTable('movie', table => 
      table.dropForeign('user_data_id'))
      .then(() => 
        table.dropForeign('movie_id'))
        .then(() => knex.schema.dropTableIfExists('user_link'))
  )
};
