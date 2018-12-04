<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{header}}</p>
    </header>
    <div class="card-content">
      <div class="content">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  components: {},
  props: ["header", "content"]
};
</script>

<style scoped>
.card{
    width: 200px;
}
</style>

