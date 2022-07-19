/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const users = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};
// const expected1 = [
//   { firstName: "Bob", lastName: "Bobbert", age: 31 },
//   { firstName: "Bob", lastName: "White", age: 31 },
// ];

const searchCriteria2 = {
  lastName: "Smith",
};
// const expected2 = [
//   { firstName: "John", lastName: "Smith", age: 25 },
//   { firstName: "Bob", lastName: "Smith", age: 27 },
// ];


function findObjects(criteria, collection) {
  let rs =[]
  for( let i = 0; i < collection.length; i++ ){
    let isFound = true;
    obj = collection[i]
    for (let key in criteria){
      if (criteria[key] !== obj[key]){
        isFound=false
      } 
    }
    if(isFound ===true){
      rs.push(obj)
    }
  }
  return rs;
}

console.log(findObjects(searchCriteria1, users))

