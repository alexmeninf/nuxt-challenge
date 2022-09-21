<template>
  <footer>
    <div class="container">
      <nav>
        <nuxt-link to="/">Início</nuxt-link>
        <nuxt-link to="/sobre">Sobre</nuxt-link>
        <button class="btn btnMode" @click="toggle">{{darkMode ? '🌙 Escuro' : '☀️ Claro'}}</button>
      </nav>

      &copy; {{new Date().getFullYear() }} Skore, todos os direitos reservados.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      darkMode: true,
    };
  },
  head () {
    return {
      bodyAttrs: {
        class: this.darkMode ? 'darkMode' : ''
      }
    }
  },
  methods: {
    toggle() {
      this.darkMode = !this.darkMode;
    },
  }
};
</script>

<style scoped>
  .btnMode {
    font-size: 13px;
    background-color: rgba(71, 71, 71, 0.658);
  }
</style>