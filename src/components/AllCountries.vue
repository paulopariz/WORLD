<template>
  <div>
    <div class="container mt-16">
      <div
        class="flex justify-between items-center max-lg:flex-col max-lg:items-start max-lg:gap-5"
      >
        <div class="flex items-center w-80">
          <input
            v-model="searchCountries"
            type="search"
            @keyup.enter="searchCountriesClick"
            placeholder="Pesquise por algum país"
            class="input transition-none w-full h-16 input-bordered border-2 border-base-300 shadow-xl rounded-lg rounded-r-none text-base tracking-wider font-normal placeholder:text-accent-content bg-base-200 focus:outline-0"
          />
          <button
            @click="searchCountriesClick"
            class="btn h-16 rounded-l-none bg-base-300 border-base-300 hover:bg-base-300 hover:border-base-300 transition-none"
          >
            <img src="../assets/img/search.svg" class="w-6 search" />
          </button>
        </div>

        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn transition-none h-16 bg-base-200 hover:bg-base-300 hover:border-base-300 border-2 border-base-300 text-base rounded-lg shadow-xl normal-case tracking-wider font-normal text-accent-content w-72 flex items-center gap-9"
            >{{ region }}
            <span class="-ml-8 text-sm mt-0.5 text-base-content"
              >( {{ paises.length }} )</span
            >
            <img src="../assets/img/arrow.svg" class="arrow w-3 mt-1.5"
          /></label>
          <ul
            tabindex="0"
            class="dropdown-content mt-2 menu p-2 bg-base-200 border-2 border-base-300 rounded-lg w-72 shadow-2xl"
          >
            <li>
              <a @click="allRegion" class="hover:bg-base-300 active:bg-base-100"
                >Todas as Regiões</a
              >
            </li>

            <li>
              <a @click="clickAfrica" class="hover:bg-base-300 active:bg-base-100"
                >África</a
              >
            </li>

            <li>
              <a @click="clickAmerica" class="hover:bg-base-300 active:bg-base-100"
                >Américas</a
              >
            </li>

            <li>
              <a @click="clickAsia" class="hover:bg-base-300 active:bg-base-100">Ásia</a>
            </li>

            <li>
              <a @click="clickEurope" class="hover:bg-base-300 active:bg-base-100"
                >Europa</a
              >
            </li>

            <li>
              <a @click="clickOceania" class="hover:bg-base-300 active:bg-base-100"
                >Oceânia
              </a>
            </li>
          </ul>
        </div>
      </div>

      <SpinnerCountries v-show="spinner" />

      <div
        class="grid grid-cols-4 gap-16 mt-16 max-xl:grid-cols-3 max-lg:grid-cols-2 max-lg:gap-y-9 max-sm:grid-cols-1"
        v-show="content"
      >
        <div
          v-for="pais in paises"
          :key="pais"
          class="w-72 rounded-lg border-2 border-t-0 border-base-300 bg-base-200 shadow-2xl m-auto max-2xl:w-68 max-xl:w-72 max-lg:w-84 max-md:w-64 max-sm:w-84"
        >
          <div class="">
            <img
              :src="pais.flags.png"
              class="rounded-lg rounded-b-none h-44 w-full max-2xl:h-42 max-xl:h-44 max-lg:h-56 max-md:h-42 max-sm:h-56"
            />
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
import SpinnerCountries from "./SpinnerCountries.vue";

export default {
  name: "AllCountries",
  components: { SpinnerCountries },

  data() {
    return {
      content: false,
      spinner: true,
      paises: [],
      region: "Todas as Região",

      searchCountries: "",
      link: "https://restcountries.com/v3.1/all",
    };
  },

  methods: {
    getCountries() {
      this.content = false;
      this.spinner = true;
      setTimeout(() => {
        this.content = true;
        this.spinner = false;
        fetch(this.link)
          .then((response) => response.json())
          .then((data) => (this.paises = data));
      }, 1600);
    },

    searchCountriesClick() {
      this.link = `https://restcountries.com/v3.1/name/${this.searchCountries}`;

      return this.getCountries();
    },

    allRegion() {
      this.link = "https://restcountries.com/v3.1/all";
      setTimeout(() => {
        this.region = "Todas as Região";
      }, 1600);

      this.getCountries();
    },

    clickEurope() {
      this.link = "https://restcountries.com/v3.1/region/europe";
      setTimeout(() => {
        this.region = "Europa";
      }, 1600);
      return this.getCountries();
    },
    clickAmerica() {
      this.link = "https://restcountries.com/v3.1/region/america";
      setTimeout(() => {
        this.region = "Américas";
      }, 1600);

      return this.getCountries();
    },

    clickAfrica() {
      this.link = "https://restcountries.com/v3.1/region/africa";
      setTimeout(() => {
        this.region = "África";
      }, 1600);

      return this.getCountries();
    },

    clickAsia() {
      this.link = "https://restcountries.com/v3.1/region/asia";
      setTimeout(() => {
        this.region = "Ásia";
      }, 1600);

      return this.getCountries();
    },

    clickOceania() {
      this.link = "https://restcountries.com/v3.1/region/oceania";
      setTimeout(() => {
        this.region = "Oceânia";
      }, 1600);

      return this.getCountries();
    },
  },

  mounted() {
    return this.getCountries();
  },
};
</script>
