function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

function greetWithDateString(person: string, dateString: string): void {
  const date = new Date(Date.parse(dateString));

  if (isNaN(date.getTime())) {
    console.error('Invalid date string');
    return;
  }

  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet("User", new Date()); // Works correctly

greetWithDateString("User", "2024-03-10"); //Now correctly handles string date

//Improved error handling
greetWithDateString("User", "Invalid Date");