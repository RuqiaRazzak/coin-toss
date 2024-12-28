function tossCoin() {
    const coin = document.querySelector('.coin');
    const result = document.querySelector('.result');

    const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';

    coin.textContent = outcome === 'Heads' ? 'H' : 'T';
    result.textContent = `It's ${outcome}!`;
  }