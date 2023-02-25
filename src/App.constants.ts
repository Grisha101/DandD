export const DEFAULT_CHARACTER_STATS: CharacterStats = {
  name: "",
  class: "",
  race: "",
  age: 0,
  level: 0,
  image: "",
  armor: 0,
  charc: 0,
  fast: 0,
  mind: 0,
  power: 0,
  state: 0,
  wise: 0,
};

export const NUMBER_STATS_KEYS: Array<keyof NumberStats> = [
  "armor",
  "power",
  "fast",
  "state",
  "mind",
  "charc",
  "wise",
];
