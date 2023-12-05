document.addEventListener('DOMContentLoaded', function(){

    function getName(name) {
        const urlName = new URLSearchParams(window.location.search);
        return urlName.get(name);
    }

    const savedName = getName('name')

document.getElementById('userName').innerText = savedName;


});