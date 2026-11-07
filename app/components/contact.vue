<script setup lang="ts"></script>
<template>
  <div
    id="contact"
    class="my-20 min-h-96 w-screen px-10"
  >
    <div class="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      <div class="flex flex-col items-center text-center">
        <p class="font-general text-[10px] uppercase">Genshin Impact</p>
        <p class="special-font font-zentry text-5px z-10 mt-10 w-full leading-[0.9] md:text-[6rem]">
          T<b>e</b>ch Ot<b>a</b>kus<br />
          Sav<b>e</b>s<br />
          The w<b>o</b>rld
        </p>

        <custom-button
          title="Play now"
          class="mt-10 cursor-pointer"
          @click="navigateTo('https://genshin.hoyoverse.com/', { external: true })"
        />
      </div>
    </div>
  </div>
</template>
