const btn=document.getElementById("Get-Started")
console.log(btn)


const savedData = JSON.parse(localStorage.getItem("user"));

// let user=sign?sign:[];

btn.addEventListener("click",function(){
  if(savedData===[]){
    window.location.href = "login.html";
  }else{
    window.location.href = "signup.html";

  }
})