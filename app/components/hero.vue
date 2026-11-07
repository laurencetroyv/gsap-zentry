<script setup lang="ts">
import gsap from "gsap"

const { finish } = useAppLoader()
const loaded_videos = ref(0)

function handleVideoLoad() {
  loaded_videos.value += 1
  if (loaded_videos.value >= 1) finish()
}

useGsap(() => {
  gsap.set("#video-frame", {
    clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
    borderRadius: "0 0 40% 10%",
  })

  gsap.from("#video-frame", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    borderRadius: "0 0 0 0",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#video-frame",
      start: "center center",
      end: "bottom center",
      scrub: true,
    },
  })
})
</script>

<template>
  <div
      id="home"
    ref="root"
    class="relative h-dvh w-screen overflow-x-hidden"
  >
    <div
      id="video-frame"
      class="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
    >
      <video
        src="/videos/hero.mp4"
        autoplay
        loop
        muted
        class="absolute top-0 left-0 size-full object-cover"
        @canplaythrough="handleVideoLoad"
      />

      <h1 class="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
        Imp<b>a</b>ct
      </h1>

      <div class="absolute top-0 left-0 z-40 size-full">
        <div class="mt-24 px-5 sm:px-10">
          <h1 class="special-font hero-heading text-blue-100">Gen<b>n</b>shin</h1>

          <p class="font-robert-regular mb-5 max-w-64 text-blue-100">
            Explore a world of Adventure
          </p>

          <custom-button
            id="watch-trailer"
            title="Watch Trailer"
            left-icon="typcn:location-arrow"
            class="flex-center gap-1 bg-yellow-300!"
            @click="navigateTo('https://www.youtube.com/watch?v=nU0MnCpsUD4', { external: true })"
          />
        </div>
      </div>
    </div>

    <h1 class="special-font hero-heading absolute right-5 bottom-5 text-black">Imp<b>a</b>ct</h1>
  </div>
</template>
