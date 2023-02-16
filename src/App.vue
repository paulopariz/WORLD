<template>
  <div>
    <AllCountries />
  </div>
</template>

<script>
import AllCountries from "./components/AllCountries.vue";

import { onMounted } from "vue";
import { themeChange } from "theme-change";

export default {
  name: "App",
  components: {
    AllCountries,
  },

  setup() {
    onMounted(() => {
      themeChange(false);
    });
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

*::-webkit-scrollbar {
  width: 0px;
}

[data-theme="dark"] .arrow {
  filter: invert(100%);
}
[data-theme="dark"] .search {
  filter: invert(100%);
}
</style>
