export interface RecipeProps {
  label: string;
  img: string;
  duration: {
    undercooked: number;
    cooked: number;
    burnt: number;
    fire: number;
  };
}

export interface RecipeCategoryProps {
  land: Array<RecipeProps>;
  sea: Array<RecipeProps>;
}

const uncookableDuration = {
  undercooked: 0,
  cooked: 0,
  burnt: 10,
  fire: 310,
};

const meatDuration = {
  undercooked: 50,
  cooked: 60,
  burnt: 120,
  fire: 420,
};

const fishDuration = {
  undercooked: 30,
  cooked: 40,
  burnt: 80,
  fire: 380,
};

const trophyFishDuration = {
  undercooked: 80,
  cooked: 90,
  burnt: 180,
  fire: 480,
};

const monsterDuration = {
  undercooked: 100,
  cooked: 120,
  burnt: 240,
  fire: 540,
};

export const recipes: RecipeCategoryProps = {
  land: [
    {
      label: 'Bait',
      img: require('./images/testfish.png'),
      duration: { ...uncookableDuration },
    },
    {
      label: 'Fruit',
      img: require('./images/testfish.png'),
      duration: { ...uncookableDuration },
    },
    {
      label: 'Snake',
      img: require('./images/testfish.png'),
      duration: { ...meatDuration },
    },
    {
      label: 'Chicken',
      img: require('./images/testfish.png'),
      duration: { ...meatDuration },
    },
    {
      label: 'Pig',
      img: require('./images/testfish.png'),
      duration: { ...meatDuration },
    },
  ],
  sea: [
    {
      label: 'Shark',
      img: require('./images/testfish.png'),
      duration: { ...meatDuration },
    },
    {
      label: 'Fish',
      img: require('./images/testfish.png'),
      duration: { ...fishDuration },
    },
    {
      label: 'Trophy Fish',
      img: require('./images/testfish.png'),
      duration: { ...trophyFishDuration },
    },
    {
      label: 'Megalodon',
      img: require('./images/testfish.png'),
      duration: { ...monsterDuration },
    },
    {
      label: 'Kraken',
      img: require('./images/testfish.png'),
      duration: { ...monsterDuration },
    },
  ],
};
