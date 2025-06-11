// App.vue
<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-md fixed-top py-1"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div class="container">
      <router-link class="navbar-brand fs-4" to="/">
        <i class="fa-solid fa-user-tie"></i> My Portfolio</router-link
      >
      <button
        class="navbar-toggler text-info shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav py-3">
          <li class="nav-item">
            <router-link class="nav-link fs-4 text-light" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-4 text-light ms-md-5" to="/projects"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-4 text-light ms-md-5" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { Collapse } from "bootstrap";

onMounted(() => {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");

  document.addEventListener("click", function (event) {
    const isClickInsideNavbar =
      navbar.contains(event.target) || toggler.contains(event.target);

    if (!isClickInsideNavbar && navbar.classList.contains("show")) {
      new Collapse(navbar).hide();
    }
  });
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("show")) {
        new Collapse(navbar).hide();
      }
    });
  });
});
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
.navbar-brand {
  color: #00eeff !important;
}
.nav-link {
  transition: all 0.5s ease-in-out;
}
.nav-link:hover {
  color: #00eeff !important;
}
.navbar-toggler-icon {
  color: #00eeff !important;
}
</style>
