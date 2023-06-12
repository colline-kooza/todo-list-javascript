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

function displayData(todo){
    const main=document.querySelector(".todo-container")


    console.log(main)
    todo.forEach((todo)=>{
    const createTemplate=`
     <p>${todo.content}</p>
 `;
 main.innerHTML="";

  main.insertAdjacentHTML("beforebegin", createTemplate)
    })

}
displayData(todos)

