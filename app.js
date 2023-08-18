
const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

// Convert JSON string to a JavaScript object
const jsObject = JSON.parse(jsonData);

// Prints out the children property only
console.log(jsObject['parent']['children']);

/* 

// Print out the parent & children properties
console.log(jsObject['parent']);


    {
  name: 'Sally',
  age: 45,
  children: [ { name: 'Kim', age: 3 }, { name: 'Lee', age: 1 } ]
}

*/

