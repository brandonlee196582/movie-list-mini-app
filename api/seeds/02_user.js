const bcrypt = require('bcryptjs');
const saltRounds = 10;
const seedPassword = 'password';
var passHash = '';
bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(seedPassword, salt, (err, hash) => {
    passHash = hash;
  })
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE user_data CASCADE')
  await knex('user_data').del()
  await knex('user_data').insert([
    {
      first_name: 'first1',
      last_name: 'last1',
      password: passHash,
      username: 'first1',
      email: 'first1@abc.com'
    },
    {
      first_name: 'first2',
      last_name: 'last2',
      password: passHash,
      username: 'first2',
      email: 'first2@abc.com'
    },
    {
      first_name: 'first3',
      last_name: 'last3',
      password: passHash,
      username: 'first3',
      email: 'first3@abc.com'
    },
    {
      first_name: 'first4',
      last_name: 'last4',
      password: passHash,
      username: 'first4',
      email: 'first4@abc.com'
    },
    {
      first_name: 'first5',
      last_name: 'last5',
      password: passHash,
      username: 'first5',
      email: 'first5@abc.com'
    }
  ]);
};
