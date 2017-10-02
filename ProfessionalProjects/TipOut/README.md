# TipOUT Calculator
This tipout calculator is designed for a fine dining steakhouse in Cupertino, CA.  Waiters can input their sales and their tipouts will be automatically calculated including the extra fixed dollar tip for baristas and backwaiters.

## Technologies
HTML / CSS / Javascript / jQuery / Zurb Foundation

## Status
Deployed / Updates Pending

## Future Updates
- Refactor into generic subPositions inside an object so that additional positions can be added and automatically calculated.

```
var subPosition = {
  bar: 1.25,
  runner: 1.675,
  somm: 3,
  ...
}
```
- Convert form to Angular
- MongoDB to store and for staff to track their declared and their tips
- Node and Express for authentication and backend.