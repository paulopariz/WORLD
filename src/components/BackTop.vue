<template>
  <a
    href="#countries"
    class="btn py-3 px-4 flex items-center justify-center bg-base-300 hover:bg-base-300 border-none fixed z-50 bottom-2 right-3"
  >
    <img src="../assets/img/arrow.svg" class="arrow w-3 rotate-180" />
  </a>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style>
[data-theme="dark"] .arrow {
  filter: invert(100%);
}
</style>
