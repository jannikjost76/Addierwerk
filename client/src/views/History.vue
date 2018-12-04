<template>
  <div class="history">
    <DividendHistory :data="dividends"></DividendHistory>
  </div>
</template>

<script>
import axios from "axios";
import DividendHistory from "../components/DividendHistory.vue";
import ApiRoutes from "../../config/apiRoutes.json";

export default {
  name: "history",
  components: {
    DividendHistory
  },
  data() {
    return {
      dividends: []
    };
  },
  created() {
    axios.get(ApiRoutes.all).then(response => {
      this.dividends = response.data;
    });
  }
};
</script>
