## Close, But Not Quite

#### Instructions to Interviewee
Write a function that accepts an array of positive integers as input. For each number, print `"(num) is SO CLOSE!"` or `"(num) is not close."` depending on whether the number is within 1 of a multiple of 7.

---
#### Hints and Clarifications
- There is an operator that finds the remainder when one number is divided by another.

---
#### Test Data
`[38, 29, 15, 59, 84, 43, 70, 2]`

---
#### Expected Result
```
38 is not close.
29 is SO CLOSE!
15 is SO CLOSE!
59 is not close.
84 is SO CLOSE!
43 is SO CLOSE!
70 is SO CLOSE!
2 is not close.
```

---
#### Additional Prompts
If the number is exactly divisible by 7, print `"(num) isn't just close, it's PERFECT!"`

```
38 is not close.
29 is SO CLOSE!
15 is SO CLOSE!
59 is not close.
84 isn't just close, it's PERFECT!
43 is SO CLOSE!
70 isn't just close, it's PERFECT!
2 is not close.
```
