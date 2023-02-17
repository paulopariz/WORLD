<template>
  <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
    <div class="flex items-center font-bold text-4xl logoText overflow-hidden">
      <span id="y" class="">W</span>
      <img src="../assets/img/world.svg" id="logoImg" class="w-7 rounded-full" />
      <span id="x" class="">RLD</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderCountries",
};
</script>

<style scoped>
#x {
  animation: x 0.8s;
}
@keyframes x {
  0% {
    margin-left: -140px;
    opacity: 0;
    width: 0px;
  }
  25% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    margin-left: 0px;
  }
}

#y {
  animation: y 0.8s;
}
@keyframes y {
  0% {
    margin-right: -140px;
    opacity: 0;
    width: 0px;
  }
  25% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    margin-right: 0px;
  }
}

#logoImg {
  animation: logoImg 1s linear infinite;
  animation-delay: 1.5s;
}
@keyframes logoImg {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(100deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
