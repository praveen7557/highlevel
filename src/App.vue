<template>
  <div id="app">
    <Header />
    <LeftPanel />
    <Workplace />
  </div>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue";
import Header from "./components/Header.vue";
import Workplace from "./components/Workplace.vue";

export default {
  name: "app",
  components: {
    Header,
    LeftPanel,
    Workplace
  }
};
</script>

<style>
@import "./styles/styles.min.css";
@import "./styles/report.min.css";
@import "./styles/widgets.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
