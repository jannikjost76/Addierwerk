<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
      </div>

      <div class="right-side">
        <p class="error" v-if="error">
          {{error}}
        </p>
        <div v-for="(post, index) in dividends"
        v-bind:key="index">
          post
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DividendService from "../DividendService";

export default {
  name: "home",
  components: {},
  methods: {},
  data() {
    dividends: [],
    error = ''
  },
  async created() {
    try {
      this.dividends = await DividendService.getDividends();
    } catch (err) {
      this.error = err.msg;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}
</style>
