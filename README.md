# TypeScript Type Error: Argument of type 'string' is not assignable to parameter of type 'Date'

This repository demonstrates a common TypeScript error, TS2345, which occurs when providing a string argument to a function expecting a Date object. The `bug.ts` file shows the error, while `bugSolution.ts` provides a solution.

The issue arises from TypeScript's strong typing system, ensuring type safety.  The solution involves type checking and using `Date.parse()` to handle string dates.