<script setup>
import Session from '../components/SessionDefault.vue'
import Card from '../components/Card.vue';

import contentServer from '../services/content';
</script>
  
<template>
  <main>
    <Session title="Recomendados para você"
      subtitle="Tenha acesso aos principais conteúdos e coneitos para aplicar seu conhecimento."
      class="py gradient-default default-section">
      <template #content>
        <div class="row">
          <div v-if="$apollo.queries.contents.error"></div>
          <div v-if="$apollo.queries.contents.loading" class="col" v-for="loading in [1,2,3,4]">
            <div class="skeleton skeleton-lg"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-rounded"></div>
          </div>
          <div v-for="item in contents" class="col">
            <Card :title="item.title" :id="item.id" :typeContent="item.type" />
          </div>
        </div>
      </template>
    </Session>
  </main>
</template>  

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: "Bem-vindo ao Nuxt.js"
    };
  },
  apollo: {
    contents: {
      query: contentServer.CONTENT_ALL,
      prefetch: true,
    },
  },
}
</script>
