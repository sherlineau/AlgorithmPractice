/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/
const students = [
  {
    firstName: "Jane",
    lastName: "Doe",
    habits: [
      "doesn't wash dishes",
      "falls asleep in lecture",
      "shows up early",
    ],
  },
  {
    firstName: "John",
    lastName: "Smith",
    habits: ["shows up late", "washes dishes", "helps peers"],
  },
  {
    firstName: "Arya",
    lastName: "Stark",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
  },
  {
    firstName: "Jon",
    lastName: "Snow",
    habits: ["shows up early", "helps peers", "washes dishes"],
  },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */

 function santasNaughtyListIterative(persons, badHabit) {
  const output = []
  
  for (const obj of persons) {
    for(habit in obj.habits) {
      if (habit === badHabit) {
        output.push(obj['firstName'] + " " + obj['lastName'])
      }
    }
  } return output
}

console.log("Results: " + santasNaughtyListIterative(students,badHabit1))


function santasNaughtyList(persons, badHabit) {
  const output = []
  
  for (const obj of persons) {
    if ( obj.hasOwnProperty("habits") && obj["habits"].includes(badHabit)) {
      output.push(obj['firstName'] + " " + obj['lastName'])
    }
  } return output
}

// console.log("Results: " + santasNaughtyList(students,badHabit1))
// console.log("Expected: " + expected1)

// console.log("Results: " + santasNaughtyList(students,badHabit2))
// console.log("Expected: " + expected2)

// console.log("Results: " + santasNaughtyList(students,badHabit3))
// console.log("Expected: " + expected3)

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
  const filteredList = persons.filter( person => person['habits'].includes(badHabit)).map(person => person['firstName'] + " " + person['lastName'])
  return filteredList
}

console.log(santasNaughtyListFunctional(students,badHabit1))
console.log(expected1)

// console.log("Results: " + santasNaughtyListFunctional(students,badHabit2))
// console.log("Expected: " + expected2)

// console.log("Results: " + santasNaughtyListFunctional(students,badHabit3))
// console.log("Expected: " + expected3)