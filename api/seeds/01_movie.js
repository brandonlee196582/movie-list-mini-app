/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE movie CASCADE')
  await knex('movie').del()
  await knex('movie').insert([
    {
      id: 1,
      title: 'Mean Girls',
      poster_img: 'https://m.media-amazon.com/images/M/MV5BMjE1MDQ4Mj…l5BanBnXkFtZTcwNzcwODAzMw@@._V1_FMjpg_UX1000_.jpg',
      trailer: 'https://www.youtube.com/watch?v=EMzEmGfTuM4',
      short_desc: `Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.`,
      director: 'Mark Waters',
      writers: 'Rosalind Wiseman~Tina Fey',
      stars: 'Lindsay Lohan~Jonathan Bennett~Rachel McAdams',
      storyline: `Lindsay Lohan stars as Cady Heron, a 16 year old homeschooled girl who not only makes the mistake of falling for Aaron Samuels (Jonathan Bennett), the ex-boyfriend of queenbee Regina George (Rachel McAdams), but also unintentionally joins The Plastics, led by Regina herself. Join Cady as she learns that high school life can and will be really tough.`,
      genres: 'Comedy',
      rating: 'PG-13',
      release_year: 2004,
      length: 97
    },
    {
      id: 2,
      title: 'Hackers',
      poster_img: 'https://m.media-amazon.com/images/M/MV5BNmExMTkyYj…OWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      trailer: 'https://www.youtube.com/watch?v=JW-ijSSLbbw',
      short_desc: `Hackers are blamed for making a virus that will capsize five oil tankers.`,
      director: 'Iain Softley',
      writers: 'Rafael Moreu',
      stars: 'Jonny Lee Miller~Angelina Jolie~Jesse Bradford',
      storyline: `A young boy is arrested by the U.S. Secret Service for writing a computer virus and is banned from using a computer until his 18th birthday. Years later, he and his new-found friends discover a plot to unleash a dangerous computer virus, but they must use their computer skills to find the evidence while being pursued by the Secret Service and the evil computer genius behind the virus.`,
      genres: 'Crime~Drama~Romance~Thriller',
      rating: 'PG-13',
      release_year: 1995,
      length: 105
    },
    {
      id: 3,
      title: 'The Grey',
      poster_img: 'https://m.media-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_.jpg',
      trailer: 'https://www.youtube.com/watch?v=ujrBaHS8UTg',
      short_desc: `After their plane crashes in Alaska, six oil workers are led by a skilled huntsman to survival, but a pack of merciless wolves haunts their every step.`,
      director: 'Joe Carnahan',
      writers: 'Joe Carnahan~Ian Mackenzie Jeffers',
      stars: 'Liam Neeson~Dermot Mulroney~Frank Grillo',
      storyline: `In Alaska, a team of oil workers board a flight home; however, they cross a storm and the airplane crashes. Only seven workers survive in the wilderness and John Ottway, who is a huntsman that kills wolves to protect the workers, assumes leadership of the group. Shortly after they learn that they are surrounded by a pack of wolves and Ottway advises that they should seek protection in the woods. But while they walk through the heavy snow, they are chased and attacked by the carnivorous mammals.`,
      genres: 'Action~Adventure~Drama~Thriller',
      rating: 'R',
      release_year: 2011,
      length: 117
    },
    {
      id: 4,
      title: 'Sunshine',
      poster_img: 'https://m.media-amazon.com/images/M/MV5BMDliNGY4ZG…kEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
      trailer: 'https://www.youtube.com/watch?v=h9CgwOifQzo',
      short_desc: `A team of international astronauts is sent on a dangerous mission to reignite the dying Sun with a nuclear fission bomb in 2057.`,
      director: 'Danny Boyle',
      writers: 'Alex Garland',
      stars: 'Cillian MurphyRose ByrneChris Evans',
      storyline: `50 years into the future, the Sun begins to die, and Earth is dying as a result. A team of astronauts is sent to revive the Sun - but the mission fails. Seven years later, a new team is sent to finish the mission as mankind's last hope.`,
      genres: 'Sci-Fi~Thriller',
      rating: 'R',
      release_year: 2007,
      length: 107
    },
    {
      id: 5,
      title: 'Ex Machina',
      poster_img: 'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OT…l5BanBnXkFtZTgwNDI3NzU2NDE@._V1_FMjpg_UX1000_.jpg',
      trailer: 'https://www.youtube.com/watch?v=bggUmgeMCdc',
      short_desc: `A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.`,
      director: 'Alex Garland',
      writers: 'Alex Garland',
      stars: 'Alicia Vikander~Domhnall Gleeson~Oscar Isaac',
      storyline: `Caleb, a 26 year old programmer at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.`,
      genres: 'Drama~Sci-Fi~Thriller',
      rating: 'R',
      release_year: 2014,
      length: 108
    }
  ]);
};