export const KEY = 'c2339f96c7f80c6046bd878c5f6687ba';

export default function format2(n, currency) {
  return currency + ' ' + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export const featuredTvShows = [
  {
    id: 67744,
    name: 'Mindhunter'
  },
  {
    id: 71578,
    name: 'Atypical'
  },
  {
    id: 66732,
    name: 'Stranger Things'
  },
  {
    id: 42009,
    name: 'Black Mirror'
  },
  {
    id: 69740,
    name: 'Ozark'
  },
  {
    id: 64254,
    name: 'Master of None'
  },
  {
    id: 65495,
    name: 'Atlanta'
  },
  {
    id: 8592,
    name: 'Parks and Recreation'
  },
  {
    id: 60573,
    name: 'Silicon Valley'
  },
  {
    id: 65345,
    name: 'The Get Down'
  },
  {
    id: 4613,
    name: 'Band of Brothers'
  },
  {
    id: 1940,
    name: 'Entourage'
  },
  {
    id: 48891,
    name: 'Brooklyn Nine-Nine'
  },
  {
    id: 1421,
    name: 'Modern Family'
  },
  {
    id: 60625,
    name: 'Rick & Morty'
  },
  {
    id: 1396,
    name: 'Breaking Bad'
  },
  {
    id: 58474,
    name: 'Cosmos: A Space Odyssey'
  },
  {
    id: 1668,
    name: 'Friends'
  },
  {
    id: 44217,
    name: 'Vikings'
  },
  {
    id: 63247,
    name: 'Westworld'
  }
];

export const featuredMovies = [
  {
    id: 181808,
    name: 'Star Wars: The Last Jedi'
  },
  {
    id: 299536,
    name: 'Avengers: Infinity War'
  },
  {
    id: 346648,
    name: 'Paddington 2'
  },
  // {
  //   id: 374720,
  //   name: 'Dunkirk'
  // },
  {
    id: 324852,
    name: 'Despicable Me 3'
  },
  // {
  //   id: 8844,
  //   name: 'Jumanji'
  // },
  {
    id: 324849,
    name: 'The Lego Batman Movie'
  }
];

export const featuredPeople = [
  {
    id: 264660,
    name: 'Alicia Vikander'
  },
  {
    id: 119589,
    name: 'Donald Glover'
  },
  {
    id: 54693,
    name: 'Emma Stone'
  },
  {
    id: 55638,
    name: 'Kevin Hart'
  },
  {
    id: 172069,
    name: 'Chadwick Boseman'
  },
  {
    id: 17051,
    name: 'James Franco'
  },
  {
    id: 51990,
    name: 'T.J Miller'
  }
];
