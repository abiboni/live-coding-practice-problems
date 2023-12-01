## Halloween Candy

#### Instructions to Interviewee
Halloween is coming, and you need to figure out how much candy to buy. Luckily you have tracked the weather, temperature, and number of tricker treaters from years past. 

There are 4 different kinds of weather to consider:
- Clear (10% more trick-or-treaters)
- Cloudy (no change)
- Raining (25% less trick-or-treaters)
- Full Moon (25% more trick-or-treaters)

There are also 4 different temperature ranges to consider:
- 40s (5% less trick-or-treaters)
- 50s (no change)
- 60s (5% more trick-or-treaters)
- 70s (20% more trick-or-treaters)

You will need to consider the average number of trick-or-treaters, and you plan to give each kid 3 pieces of candy.

Write a function that takes in two strings and an integer: the weather, the temperature, and the average number of trick-or-treaters. It should return the amount of candy needed based on those factors.

---
#### Hints & Clarifications
- Weather and temperature adjustments should both be calculated on the average number of kids.

---
#### Test Data
 - Clear, temps in the 50s, 250 kids
 - Full moon, temps in the 40s, 120 kids
 - Rainy, temps in the 70s, 180 kids

---
#### Expected Result
```
 825
 432
 513
```
