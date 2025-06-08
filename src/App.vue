// App.vue
<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top py-4">
    <div class="container">
      <router-link class="navbar-brand fs-2" to="/">My Portfolio</router-link>
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

      <div
        class="collapse navbar-collapse justify-content-end py-2 py-md-0"
        id="navbarNav"
      >
        <router-link class="nav-link d-inline me-md-5 px-2 fs-2" to="/"
          >Home</router-link
        >
        <router-link class="nav-link d-inline me-md-5 px-2 fs-2" to="/projects"
          >Projects</router-link
        >
        <router-link class="nav-link d-inline me-md-5 px-2 fs-2" to="/contact"
          >Contact</router-link
        >
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
