// Sample array of developers
let developers = [
  { name: 'John', age: 28, profession: 'developer' },
  { name: 'Jane', age: 22, profession: 'designer' },
  { name: 'Bob', age: 35, profession: 'developer' },
  { name: 'Alice', age: 30, profession: 'admin' },
  { name: 'Charlie', age: 25, profession: 'developer' },
  { name: 'David', age: 26, profession: 'admin' }
];

// Print Developers
function printDevelopers() {
  console.log('Developers:', developers);
}

// Add Data
function addData() {
  let name = prompt('Enter name:');
  let age = prompt('Enter age:');
  let profession = prompt('Enter profession:');
  
  let newData = { name: name, age: parseInt(age), profession: profession };
  developers.push(newData);
  console.log('Data added successfully:', newData);
}

// Remove Admins
function removeAdmin() {
  developers = developers.filter(person => person.profession.toLowerCase() !== 'admin');
  console.log('Admins removed:', developers);
}

// Concatenate Array
function concatenateArray() {
  let dummyArray = [
    { name: 'Eva', age: 40, profession: 'manager' },
    { name: 'Frank', age: 32, profession: 'developer' }
  ];

  let resultArray = developers.concat(dummyArray);
  console.log('Concatenated Array:', resultArray);
}

// Average Age
function averageAge() {
  let totalAge = developers.reduce((sum, person) => sum + person.age, 0);
  let average = totalAge / developers.length;
  console.log('Average Age:', average);
}

// Age Check
function checkAgeAbove25() {
  let isAbove25 = developers.some(person => person.age > 25);
  console.log('Is there anyone above 25?', isAbove25);
}

// Unique Professions
function uniqueProfessions() {
  let professions = Array.from(new Set(developers.map(person => person.profession)));
  console.log('Unique Professions:', professions);
}

// Sort by Age
function sortByAge() {
  developers.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age:', developers);
}

// Update John's Profession
function updateJohnsProfession() {
  let john = developers.find(person => person.name.toLowerCase() === 'john');
  if (john) {
    john.profession = 'manager';
    console.log('John\'s profession updated:', developers);
  } else {
    console.log('John not found in the array.');
  }
}

// Profession Count
function getTotalProfessions() {
  let developerCount = developers.filter(person => person.profession.toLowerCase() === 'developer').length;
  let adminCount = developers.filter(person => person.profession.toLowerCase() === 'admin').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}

// Note: Make sure to call these functions when the corresponding buttons are clicked in your HTML.
