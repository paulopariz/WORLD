<template>
  <div>
    <AllCountries />
  </div>
</template>

<script>
import AllCountries from "./components/AllCountries.vue";

export default {
  name: "App",
  components: {
    AllCountries,
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}
</style>
