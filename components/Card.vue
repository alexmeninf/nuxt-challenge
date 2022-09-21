<script setup>
import IconPlayVue from './icons/IconPlay.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import IconTextVue from './icons/IconText.vue';
import IconLink from './icons/IconLink.vue';
import IconDocument from './icons/IconDocument.vue';
import IconImage from './icons/IconImage.vue';
import Placeholder from '../static/img/placeholder.png'
</script>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'Nenhum título informado'
    },
    id: {
      type: String,
      required: true
    },
    typeContent: {
      type: String,
    },
    // imageUrl: {
    //   type: String,
    //   default: Placeholder
    // }
  }
}

</script>

<template>
  <div class="card">
    <div class="cardHead">
      <!-- <img :src="imageUrl" :alt="'Capa de ' + title"/> -->
      <nuxt-link :to="`/conteudo/${id}`" class="playVideo" title="Clique para abrir">
        <IconPlayVue v-if="typeContent == 'video'" />
        <IconTextVue v-if="typeContent == 'text'" />
        <IconLink v-if="typeContent == 'link'" />
        <IconDocument v-if="typeContent == 'document'" />
        <IconImage v-if="typeContent == 'image'" />
      </nuxt-link>
    </div>

    <div class="cardBody">
      <h2 :title="title">{{title}}</h2>
      <nuxt-link :to="`/conteudo/${id}`" class="btn">
        Ver mais
        <IconArrowRight />
      </nuxt-link>
    </div>
  </div>
</template>


<style scoped>
.card {
  backdrop-filter: blur(14px) saturate(120%);
  --webkit-backdrop-filter: blur(14px) saturate(120%);
  background-color: var(--card-video-bg);
  border-radius: 1.2rem;
  box-shadow: 0 5px 18px rgb(24 24 24 / 16%);
  transition: .2s all ease;
  margin-top: 30px;
}

.card:active {
  transform: scale(0.97);
}

.cardHead {
  position: relative;
  user-select: none;
  min-height: 20px;
}

.cardHead img {
  display: block;
  height: 100%;
  width: 100%;
  min-height: 200px;
  object-fit: cover;
}

.cardHead .playVideo {
  align-items: center;
  background-color: rgb(82 82 126 / 79%);
  backdrop-filter: blur(13px) saturate(120%);
  border-radius: 50rem;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: -25px;
  transform: translateX(-50%);
  transition: .2s all ease;
  width: 50px;
}

.cardHead .playVideo svg {
  width: 22px;
  height: 22px;
}

.cardHead .playVideo {
  color: #ffffff;
}

.cardBody {
  padding: 1.4rem;
  min-height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.cardBody h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  font-size: 16px;
  color: var(--card-video-title);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

@media (max-width: 575px) {
  .cardBody {
    padding: 1rem;
    min-height: 102px;
  }

  .cardBody h2 {
    font-size: 12px;
  }
}

.cardBody .btn {
  font-size: 14px;
}

.cardBody .btn svg {
  vertical-align: middle;
  transition: .3s all ease;
}

.cardBody .btn:hover svg {
  transform: translateX(5px);
}
</style>