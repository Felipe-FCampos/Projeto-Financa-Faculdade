function validateLogin(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if(name === name && password === password){
      window.location.href = 'home.html?name=' + encodeURIComponent(name);
    } else {
      alert('User not found, please try again!');
    }
}
