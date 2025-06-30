<template>
  <div class="container py-5 px-5 text-light">
    <h2 class="my-5 text-info" data-aos="fade-right">My Projects</h2>
    <div class="row g-4">
      <div
        class="col-md-6 col-lg-4 h-100"
        v-for="project in projects"
        :key="project.title"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div class="card shadow-sm h-100">
          <img
            style="height: 300px; object-fit: cover"
            :src="project.image"
            :alt="project.title"
            class="card-img-top"
          />
          <div
            class="card-body d-flex flex-column bg-dark text-light rounded-t-0 rounded-bottom-2"
          >
            <hr />
            <h5 class="card-title fs-3">{{ project.title }}</h5>
            <p class="card-text text-dark-50">{{ project.description }}</p>
            <div class="mb-3">
              <span
                class="badge bg-secondary text-light me-1 p-2"
                v-for="t in project.tech"
                :key="t"
                >{{ t }}</span
              >
            </div>
            <div class="mt-auto">
              <a
                :href="project.live"
                target="_blank"
                class="btn btn-info btn-sm me-2 fs-6"
                >Live</a
              >
              <a
                :href="project.github"
                target="_blank"
                class="btn btn-outline-light btn-sm fs-6"
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
      "Modern responsive cake shop website with product categories, dark mode, smooth transitions, clean UI, and engaging user experience for every visitor.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/cake-shop-vue.git",
    live: "https://boisterous-kataifi-622c48.netlify.app",
    image: "/images/Capture6.PNG",
  },
  {
    title: "Tiger-Bite",
    description:
      "Pixel-perfect UI clone project with smooth animations, responsive layout, advanced components, clean code, and interactive user-friendly design for better experience.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/Tiger-Bite",
    live: "https://silly-lebkuchen-29dc6c.netlify.app/",
    image: "/images/Capture1.PNG",
  },
  {
    title: "Store-Lite",
    description:
      "Lightweight e-commerce frontend solution with dynamic cart, favorites, responsive design, Vuex store, clean interface, and user-friendly shopping experience.",
    tech: ["Vue 3", "Bootstrap 5", "Vuex"],
    github: "https://github.com/a7mdadel/StoreLite.git",
    live: "https://storelite.netlify.app/",
    image: "/images/Capture2.PNG",
  },
  {
    title: "todo-app",
    description:
      "Simple clean to-do list app with add, edit, delete features, reactive state, Composition API, and fully responsive modern interface design.",
    tech: ["Vue 3", "Bootstrap 5"],
    github: "https://github.com/a7mdadel/vue-todo-app.git",
    live: "https://a7mdadel.github.io/vue-todo-app/",
    image: "/images/Capture3.PNG",
  },
  {
    title: "shopping-cart",
    description:
      "Modern e-commerce frontend app with real-time cart updates, product filtering, Pinia state management, responsive Bootstrap design, and clean organized code.",
    tech: ["Vue 3", "Bootstrap 5", "Pinia"],
    github: "https://github.com/a7mdadel/shopping",
    live: "https://storied-lamington-f72877.netlify.app/",
    image: "/images/Capture4.PNG",
  },
  {
    title: "Khamsat-Clone",
    description:
      "Responsive UI clone of Khamsat platform demonstrating layout precision, real-world CSS skills, clean HTML structure, and clear modern responsive user interface.",
    tech: ["Html", "Css"],
    github: "https://github.com/a7mdadel/5msat.git",
    live: "https://a7mdadel.github.io/5msat/",
    image: "/images/Capture5.PNG",
  },
]);
</script>
