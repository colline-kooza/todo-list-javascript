const savedData = JSON.parse(localStorage.getItem("user"));

const signupForm=document.getElementById("signupForm")
console.log(signupForm)

signupForm.addEventListener("submit", function(event){
     event.preventDefault()

    const fullName=document.getElementById("fullName")
    console.log( fullName)
    const email=document.getElementById("email")
    console.log( email)

    const password=document.getElementById("password")
    console.log(  password)


    const user = {
        fullName: fullName.value,
        email: email.value,
        password: password.value
      };

      localStorage.setItem("user", JSON.stringify(user));

      
  window.location.href = "todo.html";
})