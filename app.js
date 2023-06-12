const btn=document.getElementById("Get-Started")
console.log(btn)


const savedData = JSON.parse(localStorage.getItem("user"));

let user=savedData?savedData:{};

btn.addEventListener("click",function(){
  console.log(user)
  if(user.password ){
    window.location.href = "login.html";

  }else{
    window.location.href = "signup.html";

  }
})