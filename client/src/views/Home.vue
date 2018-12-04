<template>
  <div class="home">
    <Card :header="dividendOverallText" :content="dividends"></Card>
    <Card :header="dividendCurrentYearText" :content="dividendsCurrentYear"></Card>
  </div>
</template>

<script>
import axios from "axios";
import ApiRoutes from "../../config/apiRoutes.json";
import Card from "../components/Card";

export default {
  name: "home",
  components: { Card },
  data() {
    return {
      dividends: 0,
      dividendOverallText: "Dividends overall:",
      dividendsCurrentYear: 0,
      dividendCurrentYearText: "Dividends " + new Date().getFullYear()
    };
  },
  created() {
    axios.get(ApiRoutes.allDividends).then(respone => {
      this.dividends = respone.data + " €";
    });
    
    var routeToCurrentYear =
      ApiRoutes.allDividends + "/" + new Date().getFullYear();
    axios.get(routeToCurrentYear).then(respone => {
      this.dividendsCurrentYear = respone.data + " €";
    });
  }
};
</script>

<style scoped>
.home {
  display: flex;
}
.home > * {
  margin: 5px;
}
</style>

