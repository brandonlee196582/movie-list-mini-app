/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movie', table => {
    table.increments();
    table.string('title', 250);
    table.string('poster_img', 2000);
    table.string('trailer', 2000);
    table.string('short_desc', 2000);
    table.string('director', 250);
    table.string('writers', 800);
    table.string('stars', 800);
    table.string('storyline', 10000);
    table.string('genres', 800);
    table.string('rating', 250);
    table.integer('release_year');
    table.integer('length')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie');
};
