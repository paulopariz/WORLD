<template>
  <div>
    <NavBar />
    <AllCountries class="px-4" />
  </div>
</template>

<script>
import AllCountries from "./components/AllCountries.vue";

import { onMounted } from "vue";
import { themeChange } from "theme-change";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    AllCountries,
    NavBar,
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
[data-theme="dark"] #logoImg {
  filter: invert(100%);
}
[data-theme="dark"] .logoText {
  color: #fff;
}
[data-theme="light"] .theme {
  background-image: url("./assets/img/moonIcon.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
}
[data-theme="dark"] .theme {
  background-image: url("./assets/img/sunIcon.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
  filter: invert(100%);
}
</style>
