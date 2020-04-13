const categories = [
  {
    id: 'plants',
    name: 'Plantas',
    tags: ['products', 'inspirations'],
    count: 147,
    image: require('../../assets/icons/plants.png')
  },
  {
    id: 'seeds',
    name: 'Sementes',
    tags: ['products', 'shop'],
    count: 16,
    image: require('../../assets/icons/seeds.png')
  },
  {
    id: 'flowers',
    name: 'Flores',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../../assets/icons/flowers.png')
  },
  {
    id: 'sprayers',
    name: 'Pulverizadores',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../../assets/icons/sprayers.png')
  },
  {
    id: 'pots',
    name: 'Vasos',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../../assets/icons/pots.png')
  },
  {
    id: 'fertilizers',
    name: 'Fertilizantes',
    tags: ['products', 'shop'],
    count: 9,
    image: require('../../assets/icons/fertilizers.png')
  },
];

const products = [
  {
    id: 1,
    name: '16 melhores plantas que prosperam em seu quarto',
    description: 'Os quartos merecem ser decorados com uma vegetação luxuriante, como em qualquer outro cômodo da casa - mas pode ser complicado encontrar uma planta que prospere aqui. Pouca luz, alta umidade e temperaturas quentes significam que apenas algumas plantas florescem.',
    tags: ['Interior', '27 m²', 'Ideas'],
    gallery: [
      require('../../assets/images/plants_1.png'),
      require('../../assets/images/plants_2.png'),
      require('../../assets/images/plants_3.png'),
      //showing only 3 images, show +3 for the rest
      require('../../assets/images/plants_1.png'),
      require('../../assets/images/plants_2.png'),
      require('../../assets/images/plants_3.png'),
    ]
  }
];

const explore = [
  //images
  require('../../assets/images/explore_1.png'),
  require('../../assets/images/explore_2.png'),
  require('../../assets/images/explore_3.png'),
  require('../../assets/images/explore_4.png'),
  require('../../assets/images/explore_5.png'),
  require('../../assets/images/explore_6.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Brasil',
  email: 'hdsg0807@gmail.com',
  avatar: require('../../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  nwesletter: false
};

export {
  categories,
  products,
  explore,
  profile,
}
