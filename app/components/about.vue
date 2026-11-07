<script setup lang="ts">
import gsap from "gsap"

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
      <h2 class="font-general text-sm uppercase md:text-[10px]">Welcome to Inazuma</h2>

      <animated-title
        title="Y<b>o</b>u'll nev<b>e</b>r know<br/>even if you di<b>e</b>."
        class="mt-5 text-center text-black!"
      />

      <div class="about-subtext">
        <p>Step into Tevyat, a vast wold teeming with life</p>
        <p>Wander the thousand stars, shape myriads of wonderlands</p>
      </div>
    </div>

    <div
      class="h-dvh w-screen"
      id="clip"
    >
      <div class="mask-clip-path about-image">
        <video
          src="/videos/about.mp4"
          loop
          muted
          autoplay
          class="absolute top-0 left-0 size-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
