document.addEventListener('DOMContentLoaded', function () {
  // Função para atualizar o preço de uma criptomoeda
  const updateCryptoPrice = (cryptoId, elementId) => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=brl`)
      .then(response => response.json())
      .then(data => {
        const cryptoPrice = data[cryptoId.toLowerCase()].brl;
        document.getElementById(elementId).innerText = `R$ ${cryptoPrice}`;
      })
      .catch(error => {
        console.error(`Erro ao obter o preço do ${cryptoId}:`, error);
        document.getElementById(elementId).innerText = `R$ ${cryptoId}`;
      });
  };

  // Atualiza os preços das criptomoedas
  updateCryptoPrice('Bitcoin', 'Bitcoin');
  updateCryptoPrice('Ethereum', 'Ethereum');
  updateCryptoPrice('matic-network', 'MATIC');
  updateCryptoPrice('solana', 'solana');
  updateCryptoPrice('tether', 'tether');
  updateCryptoPrice('binancecoin', 'binancecoin');
});