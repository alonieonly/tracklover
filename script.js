document.getElementById('discover').addEventListener('click', function() {
  // Obtém o elemento de destino
  var targetElement = document.getElementById('scroll-page');

  // Usa o método scrollIntoView para rolar até o elemento
  targetElement.scrollIntoView({ behavior: 'smooth' });
});