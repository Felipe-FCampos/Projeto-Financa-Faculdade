document.addEventListener('DOMContentLoaded', function(){

    function getName(name) {
        const urlName = new URLSearchParams(window.location.search);
        return urlName.get(name);
    }

    const savedName = getName('name')

document.getElementById('userName').innerText = savedName;


});

const help = () => {
    alert('Infelizmente estamos temporariamente sem atender ao suporte! Mesmo assim, nos envie sua solicitação ou dúvida!');

    let ask = String(prompt("Em que podemos ajudar?"));

    alert("Sua solicitação foi enviada com sucesso!");
    
    console.log(ask);
}