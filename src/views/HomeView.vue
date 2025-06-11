// views/HomeView.vue
<template>
  <section
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    class="min-vh-100 bg-dark text-light d-flex align-items-center"
  >
    <div class="container py-5 mt-5">
      <div
        class="row align-items-center d-flex flex-column-reverse flex-md-row"
      >
        <div class="col-md-6 text-center text-md-start" data-aos="fade-right">
          <h1 class="display-3 fw-bold">
            Hi, <br />
            I'm <span class="text-info">Ahmed El bahy</span>
          </h1>
          <p class="lead my-4 fs-4">
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
            class="rounded-circle shadow-lg mb-5"
            style="max-width: 300px"
          />
        </div>
      </div>
      <div
        class="mt-5"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <h2 class="text-center fw-bold mb-4">My Skills</h2>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <span class="skill-badge">HTML5</span>
          <span class="skill-badge">CSS3</span>
          <span class="skill-badge">JavaScript</span>
          <span class="skill-badge">Bootstrap 5</span>
          <span class="skill-badge">Vue 3</span>
          <span class="skill-badge">Options API</span>
          <span class="skill-badge">Composition API</span>
          <span class="skill-badge">Vue Router</span>
          <span class="skill-badge">Vuex</span>
          <span class="skill-badge">Pinia</span>
          <span class="skill-badge">REST APIs</span>
          <span class="skill-badge">Git & GitHub</span>
          <span class="skill-badge">Responsive Design</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";
import AOS from "aos";

onMounted(() => {
  const options = {
    strings: ["Frontend Developer", "'Vue.js' specialist"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1000,
  };

  new Typed(".typed-text", options);

  // AOS Animation
  AOS.init();
});
</script>
<style scoped>
section {
  background-image: linear-gradient(to right, #000 40%, #69ccdaab);
  overflow: hidden;
}
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
.text-gradient {
  background: linear-gradient(to right, #0dcaf0, #6f42c1);
  -webkit--background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-badge {
  background: #ffffff;
  color: #000000;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: #0eeff0;
  color: #000;
  transform: scale(1.05);
}
</style>
