function validateLogin(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    //let savedName = 'Felipe';
    //let savePassword = '0106';

    if(name === name && password === password){
      window.location.href = 'home.html?name=' + encodeURIComponent(name);
    } else {
      alert('User not found, please try again!');
    }
}
