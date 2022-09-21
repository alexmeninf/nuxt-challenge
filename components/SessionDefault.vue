<script>
export default {
  name: 'Session',
  props: {
    title: String,
    subtitle: String,
  }
}
</script>

<template>
  <section :class="$attrs.class || 'py'">
    <div class="container">
      <h2 class="title">{{title}}</h2>
      <p v-if="!!subtitle" class="subtitle">{{subtitle}}</p>
      <slot name="content">Adicione seu conteúdo.</slot>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 28px;
}

.subtitle {
  border-left: 3px solid var(--color-theme);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  padding-left: 15px;
}
</style>