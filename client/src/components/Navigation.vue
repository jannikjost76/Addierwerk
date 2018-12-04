<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" v-on:click.native="closeNavigation" to="/">Addierwerk</router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showNavigation"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <!-- <router-link class="navbar-item" to="/" v-on:click.native="closeNavigation">Home</router-link> -->
        <router-link class="navbar-item" to="/history" v-on:click.native="closeNavigation">History</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    showNavigation() {
      this.showNav = true;
    },

    closeNavigation() {
      this.showNav = false;
    },
  },
};
</script>

<style scoped>
</style>
