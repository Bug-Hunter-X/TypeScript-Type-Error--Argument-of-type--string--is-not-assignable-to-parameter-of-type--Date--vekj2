function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet("User", new Date()); // Works correctly

// This will not compile and gives error TS2345: Argument of type 'string' is not assignable to parameter of type 'Date'.
greet("User", "2024-03-10");