/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_link').del()
  await knex('user_link').insert([
    {id: 1, user_id: 1, movie_id: 2, link_type: 'watched'},
    {id: 2, user_id: 1, movie_id: 1, link_type: 'to_watch'},
    {id: 3, user_id: 1, movie_id: 2, link_type: 'favorite'}
  ]);
};
