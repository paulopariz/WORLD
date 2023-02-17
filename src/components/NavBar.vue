<template>
  <div
    id="countries"
    class="w-full bg-base-100 shadow-md animate__animated animate__fadeInDown"
  >
    <div class="py-6 container px-4 flex items-center justify-between">
      <a
        href="https://github.com/paulopariz"
        target="_blank"
        class="flex items-center font-bold text-2xl logoText"
      >
        W<img src="../assets/img/world.svg" id="logoImg" class="w-5 rounded-full" />RLD
      </a>
      <div
        class="flex items-center btn rounded-lg bg-base-200 hover:bg-base-300 border-none transition-none"
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

<style scoped>
#logoImg {
  animation: logoImg 25s linear infinite;
}
@keyframes logoImg {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
