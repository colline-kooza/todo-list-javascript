const savedData = JSON.parse(localStorage.getItem("user"));
const loginForm=document.getElementById("loginForm")
console.log(loginForm)

const h1=document.querySelector("h1")
console.log(h1)



loginForm.addEventListener("submit", function(event){
    event.preventDefault()

    const emailLogin=document.getElementById("loginEmail")
    const passwordLogin=document.getElementById("loginPassword")
    const loginContent = {
        emailLogin: emailLogin.value,
        passwordLogin:passwordLogin.value
      };

      if(savedData && savedData.email === emailLogin && savedData.password === passwordLogin){
        window.location.href = "todo.html";
    } else {
        alert("Please enter correct information.");
    }
    const fullName = savedData.fullName;
    h1.textContent = "Welcome, " + fullName;
})