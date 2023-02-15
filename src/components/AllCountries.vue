<template>
  <div>
    <NavBar />
    <div class="container mt-16">
      <div class="flex justify-between items-center">
        <input
          type="search"
          placeholder="Pesquise por algum país"
          class="input w-full h-16 input-bordered border-2 border-base-300 max-w-md shadow-xl rounded-lg text-base tracking-wider font-normal placeholder:text-accent-content bg-base-200"
        />

        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn h-16 bg-base-200 hover:bg-base-300 hover:border-base-200 border-2 border-base-300 text-base rounded-lg shadow-xl normal-case tracking-wider font-normal text-accent-content w-72 flex items-center gap-9"
            >Filtrar por região
            <img src="../assets/img/arrow.svg" class="w-3 mt-1.5 invert"
          /></label>
          <ul
            tabindex="0"
            class="dropdown-content mt-2 menu p-2 bg-base-200 border-2 border-base-300 rounded-lg w-72 shadow-2xl"
          >
            <li><a class="hover:bg-base-300 active:bg-base-100">Africa</a></li>
            <li><a class="hover:bg-base-300 active:bg-base-100">America</a></li>
            <li><a class="hover:bg-base-300 active:bg-base-100">Asia</a></li>
            <li>
              <a @click="clickEurope" class="hover:bg-base-300 active:bg-base-100"
                >Europa</a
              >
            </li>
            <li><a class="hover:bg-base-300 active:bg-base-100">Oceania</a></li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-16 mt-16">
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
    clickEurope() {
      this.link = "https://restcountries.com/v3.1/region/europe";

      setTimeout(() => {
        fetch(this.link)
          .then((response) => response.json())
          .then((data) => (this.paises = data));
      }, 2000);
    },
  },
};
</script>
