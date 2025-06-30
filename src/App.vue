<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-md fixed-top py-1 position-relative"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <!-- Waves background -->
    <div class="waves position-absolute w-100 h-100 rounded-5">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
    </div>
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
  /* margin-top: 60px;/ */
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
.fa-user-tie {
  color: #ffffff !important;
  animation: move 10s ease-in-out infinite;
  margin-right: 5px;
}
/* Waves container */
.waves {
  position: absolute;
  bottom: 0px;
  left: 0%;
  overflow: hidden;
  z-index: -1;
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 50% 50% 0;
  opacity: 0.2;
}

.wave1 {
  background-image: linear-gradient(to right, #000 20%, #69cdda38);
  animation: wave 5s ease-in-out infinite;
}

.wave2 {
  background-image: linear-gradient(to right, #000 60%, #69cdda85);
  animation: wave 7s ease-in-out infinite;
}

.wave3 {
  background-image: linear-gradient(to right, #000 100%, #a9dce200);
  animation: wave 9s ease-in-out infinite;
}

@keyframes wave {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes move {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(0px) rotate(360deg);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
