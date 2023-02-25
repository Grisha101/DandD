declare type NumberStats = {
  armor: number;
  power: number;
  fast: number;
  state: number;
  mind: number;
  charc: number;
  wise: number;
};

declare interface CharacterStats extends NumberStats {
  image: string;
  name: string;
  class: string;
  race: string;
  age: number;
  level: number;
}
