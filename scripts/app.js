let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codestackEmail");
let normalEmail = document.getElementById("normalEmail");


function getData(){
    return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data.students;
    });
}