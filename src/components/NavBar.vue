<template>
  <div class="w-full bg-base-100 h-20 shadow-md">
    <div class="py-6 container flex items-center justify-between">
      <div>
        <img src="../assets/img/world.svg" id="logo" class="w-8 invert dark:invert-0" />
      </div>
      <div>
        <button
          v-show="x"
          @click="theme1"
          data-toggle-theme="light,dark"
          data-act-class="ACTIVECLASS"
        >
          <img src="../assets/img/sunIcon.svg" class="w-9 invert" />
        </button>

        <button
          v-show="y"
          @click="theme2"
          data-toggle-theme="light,dark"
          data-act-class="ACTIVECLASS"
        >
          <img src="../assets/img/moonIcon.svg" class="w-9" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      x: true,
      y: false,
    };
  },

  methods: {
    theme1() {
      this.x = false;
      this.y = true;
    },
    theme2() {
      this.x = true;
      this.y = false;
    },
  },
};
</script>

<style></style>
