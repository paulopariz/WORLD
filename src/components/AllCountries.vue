<template>
  <div>
    <NavBar />
    <div class="container mt-16">
      <div class="grid grid-cols-4 gap-16">
        <div
          v-for="pais in paises"
          :key="pais"
          class="w-72 rounded-lg border-2 border-t-0 border-base-300 bg-base-200 shadow-2xl"
        >
          <div class="">
            <img :src="pais.flags.png" class="rounded-lg rounded-b-none h-44 w-72" />
          </div>
          <div class="p-6">
            <h1 class="text-lg font-semibold text-accent-content">
              {{ pais.name.common }}
            </h1>
            <div class="mt-4 flex flex-col gap-1">
              <p class="text-sm text-base-content">
                <span class="font-semibold text-accent-content">Região:</span>
                {{ pais.region }}
              </p>
              <p class="text-sm text-base-content">
                <span class="font-semibold text-accent-content">Capital:</span>
                {{ pais.capital + "" }}
              </p>
              <p class="text-sm text-base-content">
                <span class="font-semibold text-accent-content">População:</span>
                {{ pais.population.toLocaleString("US") }}
              </p>
              <p class="text-sm text-base-content">
                <span class="font-semibold text-accent-content">Área territorial:</span>
                {{ pais.area.toLocaleString("US") }} km²
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "AllCountries",
  components: { NavBar },

  data() {
    return {
      paises: [],
      link: "https://restcountries.com/v3.1/all",
    };
  },

  mounted() {
    fetch(this.link)
      .then((response) => response.json())
      .then((data) => (this.paises = data));
  },

  methods: {
    xxx() {
      this.link = "https://restcountries.com/v3.1/region/europe";

      fetch(this.link)
        .then((response) => response.json())
        .then((data) => (this.paises = data));
    },
  },
};
</script>
