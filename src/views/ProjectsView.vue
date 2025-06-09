// views/ProjectsView.vue
<template>
  <div class="section container py-5 px-5 text-light">
    <h2 class="mb-4 text-info" data-aos="fade-right">My Projects</h2>
    <div class="row">
      <div
        class="mb-4"
        v-for="project in projects"
        :key="project.title"
        data-aos="zoom-in"
      >
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
</template>
<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "cake-shop",
    description:
      "A modern cake shop website designed with Vue 3 and Bootstrap. It features product categories (e.g., birthday cakes, cupcakes, specials), scroll-based navigation with ScrollSpy, and smooth UI transitions. The layout is responsive and supports dark mode for an elegant browsing experience.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/cake-shop-vue.git",
    live: "https://boisterous-kataifi-622c48.netlify.app",
  },
  {
    title: "Tiger-Bite",
    description:
      "A responsive UI clone of the Tiger Bite website created with Vue 3 and Bootstrap. The project replicates the original layout, animations, and navigation behavior, focusing on pixel-perfect design and interactivity. It demonstrates proficiency in component-based development and modern UI implementation.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/Tiger-Bite.git",
    live: "https://superb-daifuku-dff2d9.netlify.app",
  },
  {
    title: "todo-app",
    description:
      "A clean and responsive To-Do list application built with Vue 3 and Bootstrap. It allows users to add, edit, delete, and mark tasks as completed. The project showcases reactive state management using Composition API, with a smooth and intuitive user interface.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/vue-todo-app.git",
    live: "https://a7mdadel.github.io/vue-todo-app/",
  },
  {
    title: "shopping-cart",
    description:
      "A responsive e-commerce frontend application developed using Vue 3, Bootstrap 5, and Pinia. The app allows users to browse products, add them to cart, and navigate through different categories. It features clean UI, dynamic components, and real-time cart updates with Pinia for state management.",
    tech: ["Vue 3", "Bootstrap 5", "Pinia"],
    github: "https://github.com/a7mdadel/vue-todo-app.git",
    live: "https://a7mdadel.github.io/vue-todo-app/",
  },
  {
    title: "Khamsat-Clone",
    description:
      "A frontend clone of the Khamsat freelancing platform, built using html and css. The project replicates key UI sections including the services list, categories, header, and user cards. It demonstrates precision in layout replication and responsive design techniques, focusing on real-world UI practice.",
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
  border-radius: 50px;
}
</style>
