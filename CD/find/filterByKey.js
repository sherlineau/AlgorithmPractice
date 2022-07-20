/* 
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key
  will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
];

/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */
function filterByKeyStartsWith(items, searchFor, searchBy) {
  // searchFor : value
  // searchBy: key to search
  // Filters the given items based on the search criteria using a startsWith
  let rs = [];
  for (const eachItem of items) {
    let temp = eachItem[searchBy];
    if (temp.startsWith(searchFor)) {
      rs.push(eachItem);
    }
  }
  return rs;
}

console.log(filterByKeyStartsWith(people, searchFor1, searchBy1));

function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
  // Filters the given items based on the search criteria using different search method
  // search method : includes, startsWith, endsWith
  let output = [];

  for (const obj of items) {
    // conditions to check search method is being used
    if (searchMethod == "startsWith") {
      // if checks object has key [searchby] and checks if the value at that key starts with the [searchFor]
      // toLowerCase makes everything lowercase for case insensitive inputs
      if (
        obj.hasOwnProperty(searchBy) &&
        obj[searchBy].toLowerCase().startsWith(searchFor.toLowerCase())
      ) {
        // if ^^ condition is true -> push object to ouput array
        output.push(obj);
      }
    } else if (searchMethod == "includes") {
      if (
        obj.hasOwnProperty(searchBy) &&
        obj[searchBy].toLowerCase().includes(searchFor.toLowerCase())
      ) {
        output.push(obj);
      }
    } else if (searchMethod == "endsWith") {
      if (
        obj.hasOwnProperty(searchBy) &&
        obj[searchBy].toLowerCase().endsWith(searchFor.toLowerCase())
      ) {
        output.push(obj);
      }
    }
  }
  return output;
}

console.log("--------- filterByKey -------");
console.log(
  "Results:  ",
  filterByKey(people, searchFor4, searchBy4, searchMethod4)
);
console.log("Expected: ", expected4);

function functionalFilterByKey(items, searchFor, searchBy, searchMethod = "startsWith") { 
    const filteredList = items.filter( item => item[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase))

    return filteredList
}

console.log("--------- functional filterByKey -------");
console.log(
  "Results:  ",
  functionalFilterByKey(people, searchFor4, searchBy4, "endsWith")
);
console.log("Expected: ", expected4);