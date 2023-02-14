<template>
  <div v-for="pais in paises" :key="pais">
    <pre class="text-white">
 
      {{ pais.name.common }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      paises: [],
    };
  },

  mounted() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => (this.paises = data));
  },
};
</script>

<style></style>
