let itens = document.querySelectorAll('.item');
let coletores = document.querySelectorAll('.coletor');
let pontuacao = 0;

itens.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

coletores.forEach(coletor => {
  coletor.addEventListener('dragover', dragOver);
  coletor.addEventListener('drop', dropItem);
});

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function dropItem(e) {
  e.preventDefault();
  let idItem = e.dataTransfer.getData('text');
  let aceitos = e.target.getAttribute('data-aceita').split(' ');

  if (aceitos.includes(idItem)) {
    document.getElementById('mensagem').textContent = '✅ Correto!';
    pontuacao += 10;
    e.target.style.backgroundColor = '#a5d6a7';
    document.getElementById(idItem).style.display = 'none';
  } else {
    document.getElementById('mensagem').textContent = '❌ Errado! Tente novamente.';
  }

  document.getElementById('pontuacao').textContent = 'Pontuação: ' + pontuacao;

  if (pontuacao === 120) {
    document.getElementById('mensagem').textContent = '🎉 Parabéns! Você reciclou tudo!';
  }
}
