## Student Attendance

#### Instructions to Interviewee
Begin with an array of strings, each element being a record of a different student's attendance record. Each character in a string will be a `"P"` for Present, `"L"` for Late, or `"A"` for Absent.

In `practice.js`, write a function. It does not need to return a value, but it should print a series of words corresponding to each student's record. Print the word `"drop"` if a student has been absent more than two times OR if they have been late three classes in a row. Otherwise print the word `"ok"`.

---
#### Hints & Clarifications
 - The strings won't necessarily all be the same length
 - The absences do _not_ have to be consecutive to count against the student
 - Each word should print on a separate line

---
#### Test Data
 - Student 1 - `"PPLPAPLLP"`
 - Student 2 - `"PPLPAPLAA"`
 - Student 3 - `"PLAPLPAPP"`
 - Student 4 - `"PPPAPPLLL"`
 - Student 5 - `"LPPPPLPPP"`

---
#### Expected Result
```
ok  
drop  
ok  
drop  
ok  
```
