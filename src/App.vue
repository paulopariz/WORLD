<template>
  <div>
    <LoaderCountries
      v-show="loader"
      class="animate__animated animate__fadeOut animate__delay-5s"
    />
    <div v-show="content">
      <NavBar />
      <AllCountries class="px-4 animate__animated animate__fadeIn" />

      <BackTop />
    </div>
  </div>
</template>

<script>
import AllCountries from "./components/AllCountries.vue";

import { onMounted } from "vue";
import { themeChange } from "theme-change";
import NavBar from "./components/NavBar.vue";
import LoaderCountries from "./components/LoaderCountries.vue";
import BackTop from "./components/BackTop.vue";

export default {
  name: "App",
  components: {
    AllCountries,
    NavBar,
    LoaderCountries,
    BackTop,
  },

  data() {
    return {
      loader: true,
      content: false,
    };
  },

  created: function () {
    setTimeout(() => {
      this.loader = false;
      this.content = true;
    }, 8000);
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
  scroll-behavior: smooth;
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
[data-theme="light"] .logoText {
  color: #000;
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
