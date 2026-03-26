import type { DessertType } from "./types";
import type { Trait } from "../../utils/compatibility";

export const dessertTypeTraits: Record<DessertType, Trait> = {
  macaron:       { expressiveness: 5, stability: 2, depth: 3, independence: 2 },
  brownie:       { expressiveness: 2, stability: 5, depth: 4, independence: 3 },
  pudding:       { expressiveness: 3, stability: 4, depth: 3, independence: 4 },
  gelato:        { expressiveness: 5, stability: 2, depth: 2, independence: 3 },
  baklava:       { expressiveness: 4, stability: 3, depth: 5, independence: 1 },
  bingsu:        { expressiveness: 4, stability: 3, depth: 3, independence: 2 },
  mochi:         { expressiveness: 1, stability: 5, depth: 4, independence: 4 },
  creme_brulee:  { expressiveness: 3, stability: 3, depth: 5, independence: 2 },
  egg_tart:      { expressiveness: 3, stability: 4, depth: 3, independence: 5 },
  tiramisu:      { expressiveness: 2, stability: 4, depth: 5, independence: 3 },
};
