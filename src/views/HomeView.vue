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
            I'm <span class="text-info">Ahmed El Bahy</span>
          </h1>
          <p class="lead my-4 fs-4">
            Frontend developer using Vue 3 and Bootstrap to create responsive
            and user-friendly websites and apps.
          </p>
          <p class="lead">
            <span class="typed-text text-warning fs-3"></span>
          </p>
          <router-link
            to="/projects"
            class="btn btn-outline-info my-4 fs-6 position-relative"
          >
            View Projects</router-link
          >
          <a
            href="/Ahmed-Adel-2025-.pdf"
            target="_blank"
            class="btn btn-outline text-info ms-1 fs-6"
            ><button class="btn btn-outline-info">View CV</button></a
          >
        </div>
        <div class="col-md-6 text-center position-relative" data-aos="zoom-in">
          <img
            src="../assets/portfolio.png"
            alt="Profile"
            class="img-fluid rounded-circle mb-5 position-relative"
            style="max-width: 300px; z-index: 2"
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
          <a
            href="https://www.w3schools.com/html/"
            target="_blank"
            class="skill-badge"
            >HTML5</a
          >
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            class="skill-badge"
            >CSS3</a
          >
          <a
            href="https://www.w3schools.com/js/"
            target="_blank"
            class="skill-badge"
            >JavaScript</a
          >
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            class="skill-badge"
            >Bootstrap 5</a
          >
          <a href="https://vuejs.org/" target="_blank" class="skill-badge"
            >Vue 3</a
          >
          <a
            href="https://vuejs.org/api/options-state.html"
            target="_blank"
            class="skill-badge"
            >Options API</a
          >
          <a
            href="https://vuejs.org/guide/introduction.html#composition-api"
            target="_blank"
            class="skill-badge"
            >Composition API</a
          >
          <a
            href="https://router.vuejs.org/"
            target="_blank"
            class="skill-badge"
            >Vue Router</a
          >
          <a href="https://vuex.vuejs.org/" target="_blank" class="skill-badge"
            >Vuex</a
          >
          <a href="https://pinia.vuejs.org/" target="_blank" class="skill-badge"
            >Pinia</a
          >
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/REST"
            target="_blank"
            class="skill-badge"
            >REST APIs</a
          >
          <a
            href="https://www.w3schools.com/git/"
            target="_blank"
            class="skill-badge"
            >Git & GitHub</a
          >
          <a
            href="https://www.w3schools.com/html/html_responsive.asp"
            target="_blank"
            class="skill-badge"
            >Responsive Design</a
          >
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
    strings: ["Frontend Developer", "'Vue.js' Specialist"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1000,
    showCursor: true,
    cursorChar: "🖊",
    contentType: "html",
    smartBackspace: true,
  };
  new Typed(".typed-text", options);

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

.skill-badge {
  background: #ffffff;
  color: #000000;
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: #0ef0f0d3;
  color: #000;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>
