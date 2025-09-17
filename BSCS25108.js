function greet() {
      alert("Welcome to RS Clothing!");
    }
    

     document.getElementById('year').textContent = new Date().getFullYear();
      
   <button onclick="IN_STOCK">Buy Me</button>
   function IN_STOCK(){
    alert("Item is in Stock!");}
let name = document.getElementById("Full Name");
  let email = document.getElementById("Email");


  if (name === "" || email === "") {
    error.textContent = "Wrong Or Incomplete Input!";
    return;
  }

  
  if (email.includes("@") || email.includes(".")) {
    error.textContent = "Please enter a valid email!";
    return;
  }