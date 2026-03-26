import type { RelationshipType } from "./types";
import type { Trait } from "../../utils/compatibility";

export const relationshipTypeTraits: Record<RelationshipType, Trait> = {
  direct_lover:         { expressiveness: 5, stability: 2, depth: 3, independence: 2 },
  wary_flirt:           { expressiveness: 2, stability: 4, depth: 3, independence: 4 },
  devoted_giver:        { expressiveness: 4, stability: 5, depth: 3, independence: 1 },
  emotion_hider:        { expressiveness: 1, stability: 4, depth: 4, independence: 5 },
  immersive_obsessive:  { expressiveness: 4, stability: 1, depth: 5, independence: 1 },
  stability_seeker:     { expressiveness: 3, stability: 5, depth: 3, independence: 3 },
  atmosphere_sensitive: { expressiveness: 5, stability: 2, depth: 4, independence: 2 },
  deep_emotionalist:    { expressiveness: 2, stability: 3, depth: 5, independence: 3 },
};
