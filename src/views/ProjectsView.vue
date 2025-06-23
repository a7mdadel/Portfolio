<template>
  <div class="section container py-5 px-5 text-light">
    <h2 class="my-5 text-info" data-aos="fade-right">My Projects</h2>
    <div class="row">
      <div
        class="mb-4 col-md-6 d-flex justify-content-center"
        v-for="project in projects"
        :key="project.title"
        data-aos="zoom-in"
      >
        <div data-aos="fade-up" data-aos-duration="3000">
          <div class="card text-black h-100">
            <div class="card-body">
              <h5 class="card-title fs-2">{{ project.title }}</h5>
              <p class="card-text fs-5 text-dark-50">
                {{ project.description }}
              </p>
              <div class="mb-4 d-flex flex-wrap justify-content-center gap-3">
                <span
                  class="text-dark p-1 fs-5 me-2"
                  v-for="t in project.tech"
                  :key="t"
                  >({{ t }})</span
                >
              </div>
              <a
                :href="project.live"
                class="btn btn-outline-info btn-sm me-2 fs-4"
                target="_blank"
                >Live</a
              >
              <a
                :href="project.github"
                class="btn btn-outline-info btn-sm fs-4"
                target="_blank"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "cake-shop",
    description:
      "Modern responsive cake shop with product categories, ScrollSpy navigation, dark mode, and smooth transitions.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/cake-shop-vue.git",
    live: "https://boisterous-kataifi-622c48.netlify.app",
  },
  {
    title: "Tiger-Bite",
    description:
      "Pixel-perfect UI clone with animations and responsive layout showcasing advanced component-based design.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/Tiger-Bite",
    live: "https://silly-lebkuchen-29dc6c.netlify.app/",
  },
  {
    title: "Store-Lite",
    description:
      "Lightweight e-commerce frontend with dynamic cart, favorites, and responsive design using Vue 3, Bootstrap 5 and Vuex.",
    tech: ["Vue 3", "Bootstrap 5", "Vuex"],
    github: "https://github.com/a7mdadel/StoreLite.git",
    live: "https://storelite.netlify.app/",
  },
  {
    title: "todo-app",
    description:
      "Simple and clean to-do list app with add/edit/delete features and reactive state using Composition API.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/vue-todo-app.git",
    live: "https://a7mdadel.github.io/vue-todo-app/",
  },
  {
    title: "shopping-cart",
    description:
      "E-commerce frontend with real-time cart updates, product filtering, and state management using Pinia.",
    tech: ["Vue 3", "Bootstrap 5", "Pinia"],
    github: "https://github.com/a7mdadel/shopping",
    live: "https://storied-lamington-f72877.netlify.app/",
  },
  {
    title: "Khamsat-Clone",
    description:
      "Responsive UI clone of Khamsat platform showcasing layout precision and real-world CSS skills.",
    tech: ["Html", "Css"],
    github: "https://github.com/a7mdadel/5msat.git",
    live: "https://a7mdadel.github.io/5msat/",
  },
]);
</script>
<style scoped>
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 1.9);
  background-color: #eeeeee;
  border-radius: 20px;
}
</style>
