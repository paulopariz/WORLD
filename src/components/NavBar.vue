<template>
  <div class="w-full bg-base-100 h-20 shadow-md">
    <div class="py-6 container flex items-center justify-between">
      <div>
        <img src="../assets/img/world.svg" id="logo" class="w-8" />
      </div>
      <div
        class="flex items-center btn rounded-lg bg-base-200 hover:bg-base-300 border-none"
      >
        <h1 class="mr-6 tracking-wider text-base-content">Tema</h1>

        <button data-toggle-theme="light,dark" data-act-class="ACTIVECLASS">
          <div class="w-9 theme" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
