let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codestackEmail");
let email = document.getElementById("email");
let studentsBtn = document.getElementById("studentsBtn");
let previousBtn = document.getElementById("previousBtn");
let previousHistory = [];
const previousItems = 5;


function getData(){
    return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data.students;
    });
}

function randomizeData(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}

function addData(newData) {
    if (previousHistory.length < previousItems) {
        previousHistory.push(newData);
    } else {
        console.log("History is full, not adding more.");
    }
    console.log(previousHistory);
}


function displayPreviousData() {
    const displayArea = document.getElementById('dataDisplayArea');
    displayArea.innerHTML = '';

    const startIndex = Math.max(0, previousHistory.length - previousItems);
    const previousData = previousHistory.slice(startIndex);

    if (previousData.length === 0) {
        displayArea.textContent = "No previous data to display.";
    } else {
        previousData.forEach(student => {
            const container = document.createElement('div');
            container.innerHTML = `
                <h1>First Name: ${student.firstName}</h1>
                <h1>Last Name: ${student.lastName}</h1>
                <h1>CodeStack Email: ${student.codestackEmail}</h1>
                <h1>Email: ${student.email}</h1>
            `;
            displayArea.appendChild(container);
        });
    }
}


studentsBtn.addEventListener("click", () => {
    getData().then((students)=> {
        let randomStudent = randomizeData(students);
        addData(randomStudent);
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        codestackEmail.innerText = randomStudent.codestackEmail;
        email.innerText = randomStudent.email;
    }) 
});

previousBtn.addEventListener("click", () => {
    const newData = `Data item`;
    addData(newData);
    displayPreviousData();
    console.log("Added:", newData);
});