// views/HomeView.vue
<template>
  <section class="min-vh-100 bg-dark text-light d-flex align-items-center">
    <div class="container py-5 mt-5">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start" data-aos="fade-right">
          <h1 class="display-2 fw-bold">
            Hi, I'm <span class="text-info">Ahmed El bahy</span>
          </h1>
          <p class="lead my-4 fs-3">
            Frontend developer using Vue 3 and Bootstrap to create responsive
            and user-friendly websites and apps.
          </p>
          <p class="lead">
            <span class="typed-text text-warning fs-3"></span>
          </p>
          <router-link to="/projects" class="btn btn-outline-info my-4 fs-3"
            >View My Projects</router-link
          >
        </div>
        <div class="col-md-6 text-center" data-aos="zoom-in">
          <img
            src="../assets/profile.png"
            alt="Profile"
            class="img-fluid rounded-circle shadow-lg"
            style="max-width: 350px"
          />
        </div>
      </div>

      <div class="mt-5" data-aos="fade-up">
        <h2 class="text-info mb-4">My Skills</h2>
        <div
          class="d-flex flex-column align-items-center flex-md-row flex-wrap gap-2"
        >
          <span class="badge">Vue 3</span>
          <span class="badge">Composition API</span>
          <span class="badge">JavaScript</span>
          <span class="badge">Bootstrap</span>
          <span class="badge">HTML5</span>
          <span class="badge">CSS3</span>
          <span class="badge">Git & GitHub</span>
          <span class="badge">Responsive Design</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  const options = {
    strings: ["Frontend Developer", "Vue.js specialist"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1000,
  };

  new Typed(".typed-text", options);
});
</script>
<style scoped>
.typed-text {
  font-family: Sansita Swashed;
  letter-spacing: 2px;
}
.text-info {
  color: #00eeff !important;
}
.badge {
  width: fit-content;
  background-color: #111;
  color: #0eeff0;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.badge:hover {
  background-color: #0eeff0;
  color: #111111;
}
.badge:not(:last-child) {
  margin-right: 1rem;
}
</style>
