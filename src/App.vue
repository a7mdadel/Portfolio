// App.vue
<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top py-1">
    <div class="container">
      <router-link class="navbar-brand fs-2" to="/">
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
            <router-link class="nav-link fs-2 text-light" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-2 text-light" to="/projects"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-2 text-light" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup></script>

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
</style>
