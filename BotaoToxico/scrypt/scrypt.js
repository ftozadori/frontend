const botaoNao = document.getElementById('nao');
const divBotoes = document.querySelector('.botoes');

divBotoes.addEventListener('mousemove', (evento) => {
  const mouseX = evento.clientX;
  const mouseY = evento.clientY;
  const retangulo = botaoNao.getBoundingClientRect();
  const margem = 100;

  if (
    mouseX > retangulo.left - margem &&
    mouseX < retangulo.right + margem &&
    mouseY > retangulo.top - margem &&
    mouseY < retangulo.bottom + margem
  ) {
    const novoX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const novoY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.left = `${novoX}px`;
    botaoNao.style.top = `${novoY}px`;
  }
});

document.getElementById('sim').addEventListener('click', () => {
    window.open("agradecimento_anime_felipe.png", "_blank");
  });