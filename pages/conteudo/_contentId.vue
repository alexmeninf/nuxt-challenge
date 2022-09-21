<script setup>
import contentServer from '../../services/content';

import IconDownload from '../../components/icons/IconDownload.vue';
import IconCalendar from '../../components/icons/IconCalendar.vue';
import IconArrowRight from '../../components/icons/IconArrowRight.vue';
</script>

<script>
export default {
  name: 'conteudo',
  head() {
    return {
      title: this.getContent.title
    };
  },
  data() {
    return {
      getContent: {}
    };
  },
  apollo: {
    getContent: {
      prefetch: true,
      query: contentServer.GET_CONTENT,
      variables() {
        return { id: this.$route.params.contentId };
      },
    },
  },
  methods: {
    theDate(timestemp) {
      const date = new Date(timestemp);
      return date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear() +
        " " + date.getHours() +
        ":" + date.getMinutes() +
        ":" + date.getSeconds()
    },
    getEmbedURL(url) {
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = regExp.exec(url);

      if (!!match && match[2].length == 11) {
        return 'https://www.youtube.com/embed/' + match[2];
      } else {
        console.log('Link inválido', url)
      }
    }
  },
  layout(context) {
    return 'default'
  }
}
</script>

<template>
  <section class="details py gradient-default default-section">
    <div class="container">
      <div v-if="$apollo.queries.error" class="wrapperContent"></div>
      <div v-if="$apollo.queries.getContent.loading" class="wrapperContent">
        <div class="skeleton skeleton-text" style="max-width: 80px"></div><br><br>
        <div class="skeleton skeleton-rounded" style="margin-bottom: 1.5rem"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text" style="max-width: 200px"></div>
        <div class="skeleton skeleton-lg"></div>
      </div>

      <div v-else class="wrapperContent">
        <nuxt-link to="/" class="btn-link back">
          <IconArrowRight style="transform:rotateY(180deg)" /> Voltar
        </nuxt-link>

        <h1 class="title">{{ getContent.title }}</h1>

        <time class="date">
          <IconCalendar />
          Publicado em {{theDate(getContent.created_at)}}
        </time>

        <div v-if="getContent.type == 'video' && !!getContent.embeddable">
          <h2>Assista ao vídeo</h2>
          <div class="ratio ratio-16x9">
            <iframe :src="getEmbedURL(getContent.url)" :title="getContent.title" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div v-if="(getContent.type == 'link' || getContent.type == 'document') && !!getContent.embeddable"
          class="ratio ratio-1x1">
          <iframe :src="getContent.url" frameborder="0"></iframe>
        </div>

        <div v-if="getContent.type == 'image'">
          <img :src="getContent.url" alt="Imagem" class="defaultImage img-fluid rounded">
        </div>

        <div class="flex">
          <div v-if="getContent.allow_download">
            <a :href="getContent.url" download target="_blank" rel="noreferrer noopener" class="btn">
              <IconDownload />
              Baixar {{getContent.type == 'image' ? 'imagem' : 'conteúdo'}}
            </a>
          </div>

          <div v-if="getContent.type == 'link' || getContent.type == 'document'">
            <a :href="getContent.url" target="_blank" rel="noreferrer noopener" class="btn">Acessar conteúdo</a>
          </div>
        </div>

        <div v-if="!!getContent.description" class="description">
          {{getContent.description}}
        </div>
      </div>
    </div>
  </section>
</template> 

<style>
.details {
  word-break: break-word;
}

.details .ratio {
  background-color: #000;
}

.details .btn {
  margin: 0.5rem 0.1rem;
  padding: 1em 1.7em;
}

.details .btn svg {
  width: 1.7em;
  vertical-align: middle;
  margin-right: 10px;
}

.description {
  background-color: rgba(148, 148, 148, 0.164);
  padding: 34px;
  border-radius: var(--border-radius);
  line-height: 1.8;
  font-size: 20px;
  font-weight: 300;
}

.wrapperContent {
  max-width: 700px;
  margin: 0 auto;
}

.title {
  font-size: 42px;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .details .btn {
    font-size: 14px;
  }

  .title {
    font-size: 34px;
  }

  .description {
    font-size: 18px;
  }

  .ratio-1x1 {
    --aspect-ratio: 160%;
  }
}

.flex {
  display: flex;
}

.flex>div,
.ratio,
.defaultImage {
  margin-bottom: 2rem;
}

.date {
  display: block;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2rem;
}

.date svg {
  height: 1.1rem;
  width: 1.1rem;
  vertical-align: middle;
  margin-right: 10px
}
</style>