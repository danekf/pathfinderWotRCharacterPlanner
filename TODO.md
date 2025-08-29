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
    - Add racial feats to a level 0.
  - ~~Gender~~ 

- Feats (Class)
  - feats can only be chosen from a set list (validation)
    - remove "Any from feat validation input"
    - add specific error message for failure condition
  - Ensure dependencies exist
  - Add feat every other char level
  - remove (enforce correct type of map) 'any' type input from "validateFeatSelection" and "hasPrerequisiteFeat"
  - should show a placeholder text for pregression along a character class, and then be replaced when something is chosen

- Class specific stuff
  - separate class for Prestige class

- create ability to multi class and calculate things such as BaB

- Mythic levels
  - Can be added anytime with no level restriction (except for level 6 required for first mythic?)
  - separate progression and map
  - probably needs a separate helper of sorts for each mythic path as they vary wildly

- Spells
  - A whole lot of stuff to do here. Tackle after rest is implemented as spell selection depends on so many things. Including class, subclass, domains, and more stuff.
  

## Frontend Stuff
- Fix viewport stuff since adding SSR
  - menu bar and child are not scaling properly in the baseLayout (or if we dont use it as well, something is off)

- Router v7 updates (followed v6 guide to start)
  - static routes missing on entry server
  - [v7 tutorial](https://www.youtube.com/watch?v=h7MTWLv3xvw) to follow? 

- Theme (brown and canvas like in WoTR character creator)