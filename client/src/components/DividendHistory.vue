<template>
  <div class="dividendHistory">
    <table class="table">
      <thead>
        <tr>
          <th>WKN</th>
          <th>Name</th>
          <th>Date</th>
          <th>Value in €</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data" v-bind:key="entry._id">
          <td>{{entry.wkn}}</td>
          <td>{{entry.name}}</td>
          <td>{{entry.date}}</td>
          <td>{{entry.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "dividendHistory",
  components: {},
  props: ["data"],
};
</script>

<style scoped>
.table{
    width: 100%;
}
</style>

