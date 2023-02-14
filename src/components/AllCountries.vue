<template>
  <div class="container mt-36">
    <div class="grid grid-cols-4 gap-16">
      <div v-for="pais in paises" :key="pais" class="w-72 rounded-lg">
        <div class="">
          <img :src="pais.flags.png" class="rounded-lg rounded-b-none h-44 w-72" />
        </div>
        <div class="border-2 border-t-0 border-slate-200 p-6">
          <h1 class="text-lg font-semibold">{{ pais.name.common }}</h1>

          <div class="mt-4 flex flex-col gap-1">
            <p class="text-sm text-gray-900">
              <span class="font-semibold text-black">Região:</span>
              {{ pais.region }}
            </p>

            <p class="text-sm text-gray-900">
              <span class="font-semibold text-black">Capital:</span>
              {{ pais.capital + "" }}
            </p>

            <p class="text-sm text-gray-900">
              <span class="font-semibold text-black">População:</span>
              {{ pais.population.toLocaleString("US") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllCountries",

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
