<template>
  <div class="about py default-section gradient-default">
    <div class="container">
      <div class="wrapper">
        <h1>Sobre este Projeto</h1>
        <p>Este projeto é um exemplo de layout desenvolvido com o framework Vue.js para entender a forma de estruturação
          de código e as habilidades com interfaces. 😀</p>
        <p>Feito pro <a href="https://github.com/alexmeninf" target="_blank" rel="noreferrer">Alexandre Menin</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sobre',
  head() {
    return {
      title: "Sobre o projeto"
    };
  }
}
</script>
  

<style scoped>
.about {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about h1 {
  font-size: 45px;
}

.about p {
  font-size: 24px;
  font-weight: 300;
}

@media (max-width: 768px) {
  .about p {
    font-size: 20px;
  }
}

.wrapper {
  max-width: 650px;
  margin: 0 auto;
}
</style>