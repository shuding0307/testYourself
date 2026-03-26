export type DessertType =
  | 'macaron'
  | 'brownie'
  | 'pudding'
  | 'gelato'
  | 'baklava'
  | 'bingsu'
  | 'mochi'
  | 'creme_brulee'
  | 'egg_tart'
  | 'tiramisu';

export interface DessertOption {
  text: {
    ko: string;
    en: string;
    jp: string;
    zh: string;
    lt: string;
  };
  scores: Partial<Record<DessertType, number>>;
}

export interface DessertQuestion {
  id: number;
  text: {
    ko: string;
    en: string;
    jp: string;
    zh: string;
    lt: string;
  };
  options: {
    A: DessertOption;
    B: DessertOption;
    C: DessertOption;
    D: DessertOption;
  };
}
