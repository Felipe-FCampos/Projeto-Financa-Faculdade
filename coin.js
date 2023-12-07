document.addEventListener('DOMContentLoaded', function(){
    let coin = 'Bitcoin';
    document.getElementById('title').innerText = coin;

    let mine = 0; 

    document.getElementById('percent').innerText = mine;

    function addCoin(){
        mine += 0.01
        document.getElementById('percent').innerText = mine.toFixed(2);
        
    }

    function removeCoin(){
        mine -= 0.01;
        document.getElementById('percent').innerText = mine.toFixed(2);
    }

    document.getElementById('addC').addEventListener('click', addCoin);
    document.getElementById('removeC').addEventListener('click', removeCoin);
    
});

