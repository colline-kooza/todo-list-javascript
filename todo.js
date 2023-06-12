const input=document.querySelector("#input")
const btn=document.querySelector("button")
// const array=[]

const savedData = JSON.parse(localStorage.getItem("todos"));
let todos=savedData?savedData:[];
console.log(todos)

btn.addEventListener("click", addChanges)

function addChanges(){
    const newTodo={
        content:input.value,
    }
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    displayData(todos)

}

function displayData(todos){
    const main=document.querySelector(".todo-container")
    main.innerHTML="";


    console.log(main)
    todos.forEach((todo)=>{
    const createTemplate=`
     <p>${todo.content}</p>
 `;

  main.insertAdjacentHTML("beforebegin", createTemplate)
    })

}
displayData(todos)

