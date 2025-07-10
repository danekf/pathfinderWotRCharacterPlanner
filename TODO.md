## WebDev Stuff
- SSR

## Testing
Use [Vitest](https://vitest.dev/guide/).

### Tests to make
- New Main Character creation

## Pathfinder Stuff
- Character (Class)
  - Attributes :
    - Completion of 'validateStartingStats' function. 
      - Ensure that scaling point costs are accounted for.
    - Allow attribute increases by 1 every 4th level
  - Race
    - ~~Add basic racial tag~~
    - Racial bonus to attributes must be handled
    - Add racial traits to a level 0.
  - ~~Gender~~ 

- Feats (Class)
  - feats can only be chosen from a set list (validation)
    - remove "Any from feat validation input"
    - add specific error message for failure condition
  - Ensure dependencies exist
  - Add feat every other char level
  - remove (enforce correct type of map) 'any' type input from "validateFeatSelection" and "hasPrerequisiteFeat"

- Class specific stuff
  - should each class have its own level up helper to avoid having an enormous class? How to handle?
  - could have a separate helper for each class since it gets complex. And then just add the data into the carachter level map?

- Mythic levels
  - Can be added anytime with no level restriction (except for level 6 required for first mythic?)
  - separate progression and map
  - probably needs a separate helper of sorts for each mythic path as they vary wildly

- Spells
  - A whole lot of stuff to do here. Tackle after rest is implemented as spell selection depends on so many things. Including class, subclass, domains, and more stuff.