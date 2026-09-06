function comprar(produto) {
  const numero = "5512978144863";
  const mensagem = `Olá! Quero comprar: ${produto}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}<button onclick="comprar('Conta de Blox Fruits')">Comprar</button><script src="script.js"></script>