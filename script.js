const form = document.querySelector("#form")
const nameInput = document.querySelector("#nameInput")
const ageInput = document.querySelector("#ageInput")
const departmentInput = document.querySelector("#departmentInput")
const submit = document.querySelector("#submitForm")
const list = document.querySelector("#nameList")
const error = document.querySelector("#errormessage")


const studentObject = [];

nameInput.addEventListener("input", function () {
    error.textContent = nameInput.value.trim().length;
    error.style.color = "black";
});


form.addEventListener("submit", function (event) {
    event.preventDefault()

    if (nameInput.value == "" &&
        ageInput.value == "" &&
        departmentInput.value == ""
    ) {
        error.textContent = "please fill all the fields!";
        error.style.color = "tomato";
        return;
    }
    if (nameInput.value == "") {
        error.textContent = "Enter your name please!";
        error.style.color = "tomato";
        return;
    }
    
    if (ageInput.value == "") {
        error.textContent = "Enter your age please!";
        error.style.color = "tomato";
        return;
    }
    if (departmentInput.value == "") {
        error.textContent = "Enter your department please!";
        error.style.color = "tomato";
        return;
    }



    newstudent = {
        name: nameInput.value.trim(),
        age: ageInput.value.trim(),
        department: departmentInput.value.trim()
    }

    studentObject.push(newstudent)


    nameInput.value = ""
    ageInput.value = ""
    departmentInput.value = ""
    error.textContent = ""
    displaystudent()
})

/*************************************************
*************************************************/

function displaystudent() {

    list.innerHTML = "";
    error.textContent = "";
    studentObject.forEach(function (student, index) {
        const li = document.createElement("li")
        li.innerHTML =  `<h3> name: ${student.name} <br>
                            age: ${student.age} <br>
                            department: ${student.department}</h3>`;

        list.appendChild(li)


        const liDEL = document.createElement("button")

        liDEL.textContent = "❌"
        liDEL.style.border = "red 1px"
        liDEL.style.fontSize = "20px"
        liDEL.style.borderRadius = "7px"
        li.appendChild(liDEL)

        liDEL.addEventListener("click", function () {

            studentObject.splice(index, 1)
            displaystudent()
        })
    })
    quota = `<p>Number of students: ${studentObject.length}</p>`
    document.querySelector(".array_container").innerHTML = quota

}