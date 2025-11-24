let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codeStackEmail = document.getElementById("codeStackEmail");
let email = document.getElementById("email");
let historyList = document.getElementById("historyList")
let recentStudents = [];

function getData() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.students;
    });
}


function randomizeData(students) {
  let randomIndex = Math.floor(Math.random() * students.length);
  console.log([randomIndex]);
  return students[randomIndex];
}
function updateHistory(){
    historyList.innerHTML= "";
    for(let i = 0; i <recentStudents.length; i++){
        let li = document.createElement("li");
        li.innerText=recentStudents[i]
        historyList.appendChild(li);
    }
}

studentBtn.addEventListener("click", () => {
  getData().then((students) => {
    let randomStudent = randomizeData(students);
    console.log(randomStudent);
    firstName.innerText = randomStudent.firstName;
    lastName.innerText = randomStudent.lastName;
    codeStackEmail.innerText = randomStudent.codeStackEmail;
    email.innerText = randomStudent.email;

    let fullName = randomStudent.firstName + " " + randomStudent.lastName;
    recentStudents.push(fullName);
    if(recentStudents.length > 5){
        recentStudents.shift();
    }
    updateHistory();
  });
});
