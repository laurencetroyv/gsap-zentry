<script setup lang="ts">
import gsap from "gsap"
import AnimatedTitle from "~/components/animated-title.vue"

useGsap(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })
    .to(".mask-clip-path", { width: "100vw", height: "100vh", borderRadius: 0 })
})
</script>

<template>
  <div
    id="about"
    class="min-h-screen w-screen"
  >
    <div class="relative mt-36 mb-8 flex flex-col items-center gap-5">
      <h2 class="font-general text-sm uppercase md:text-[10px]">Welcome to Zentry</h2>

      <animated-title
        title="Disc<b>o</b>ver the world's <br/>l<b>a</b>rgest shared adventure"
        class="mt-5 text-center text-black!"
      />

      <div class="about-subtext">
        <p>The Game of Games begins-your life, now an epic MMORPG</p>

        <p>Zentry unites every player from countless games and platforms</p>
      </div>
    </div>

    <div
      class="h-dvh w-screen"
      id="clip"
    >
      <div class="mask-clip-path about-image">
        <img
          src="/img/about.webp"
          alt="Background"
          class="absolute top-0 left-0 size-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
