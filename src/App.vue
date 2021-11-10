<template>
  <div id="app" class="container">
    <div class="row py-4">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>