/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user_data', table => {
    table.increments();
    table.string('first_name', 250);
    table.string('last_name', 250);
    table.string('password', 1000);
    table.string('username', 250);
    table.string('email', 250)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
