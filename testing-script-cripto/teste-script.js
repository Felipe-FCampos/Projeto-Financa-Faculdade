function updateCrypto() {
    const selectedCrypto = document.getElementById("cryptoSelect").value;
    const cryptoNameElement = document.getElementById("cryptoName");
    const apiUrl = `https://www.mercadobitcoin.net/api/${selectedCrypto}/ticker`;

    if (selectedCrypto=="BTC")
    cryptoNameElement.innerText = "Bitcoin";
    else if (selectedCrypto=="ETH")
    cryptoNameElement.innerText = "Ethereum";
    else if (selectedCrypto=="MATIC")
    cryptoNameElement.innerText = "Polygon";
    
    fetchData(apiUrl);
}

async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        showElements(data);
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

function showElements(apiResponse) {
    document.getElementById('high').innerText = `High: ${apiResponse.ticker.high} (Decimal)`;
    document.getElementById('low').innerText = `Low: ${apiResponse.ticker.low} (Decimal)`;
    document.getElementById('vol').innerText = `Volume: ${apiResponse.ticker.vol} (Decimal)`;
    document.getElementById('last').innerText = `Last: ${apiResponse.ticker.last} (Decimal)`;
    document.getElementById('buy').innerText = `Buy: ${apiResponse.ticker.buy} (Decimal)`;
    document.getElementById('sell').innerText = `Sell: ${apiResponse.ticker.sell} (Decimal)`;
    const date = new Date(apiResponse.ticker.date * 1000);
    document.getElementById('date').innerText = `Date: ${date} (Inteiro)`;
}

updateCrypto();