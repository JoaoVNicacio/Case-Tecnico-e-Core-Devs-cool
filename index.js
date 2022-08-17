// Control variables:
let validation = true;
let i = 0;
// List of people:
let peopleList = [];
let sortedPeopleList = [];

// Creating the person class:
class Person {
    constructor(name, age, ageRange) {
        this.name = name;
        this.age = age;

        // Define the age range:
        if (age >= 0 && age <= 12) {
            ageRange = `Child`;

        } else if (age > 12 && age <= 19) {
            ageRange = `Teenager`;

        } else if (age > 19 && age <= 65) {
            ageRange = `Adult`;

        } else {
            ageRange = `Elder`;

        }

        this.ageRange = ageRange;
    }
}

// Function to add people with the inputs
function addPerson() {
    // Getting the inputs:
    let nameInput = prompt(`What's the name of the new person? `);
    let ageInput = parseInt(prompt(`What's the age of the new person? `));

    // Re-enter the age if it´s less than 0:
    while (ageInput < 0) {
        ageInput = prompt(`${ageInput} is not a valid age, please enter a valid one. `);
    }

    // Creating and returning the object:
    let newPersonInput = new Person(nameInput, ageInput);
    return newPersonInput;
}

// Function for sorting the list in a crescent order alphabetically and numerically:
function sortList(list) {
    let sortedList = list.sort((a, b) => {
        return a.name.localeCompare(b.name) || a.age - b.age;
    })

    return sortedList;
}

console.log(`Welcome to the e-Core test list! let's add some people? what do you think? \n`);

// while true for validation and adding people to the list
while (validation === true) {
    let responseToAddNewUser = prompt(`Do you want to add someone? (y) to yes / (n) to no. `);
    console.clear();

    if (responseToAddNewUser.toLowerCase() === 'y') {
        // Adding the person to the list: 
        peopleList[i] = addPerson();

        i++
        console.clear();

    } else if (responseToAddNewUser.toLowerCase() === 'n') {
        console.log(`Ok! we're going to organize and show you the list! \n`);
        validation = false;

    } else {
        console.log(`Oops, we think you added an invalid input, could you enter it again? `);

    }

}

// Creating the sorted list and showing it:
sortedPeopleList = sortList(peopleList);
sortedPeopleList.length === 0
    ? console.log(`Your list is empty, so we don't have people to show :( `)
    : console.table(sortedPeopleList);
