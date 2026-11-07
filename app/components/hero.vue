<script setup lang="ts">
import gsap from "gsap"
import CustomButton from "~/components/custom-button.vue"

const { finish } = useAppLoader()
const total_videos = 4

const current_index = ref(1)
const has_clicked = ref(false)
const loaded_videos = ref(0)

const upcoming_video_index = computed(() => (current_index.value % total_videos) + 1)

const root_ref = useTemplateRef("root")
const next_video_ref = useTemplateRef("next_video_ref")

function handleMiniVideoClick() {
  has_clicked.value = true
  current_index.value = (current_index.value % total_videos) + 1
}

function getVideoSource(index: number) {
  return `videos/hero-${index}.mp4`
}

function handleVideoLoad() {
  loaded_videos.value += 1
  if (loaded_videos.value >= 3) finish()
}

useGsap(
  () => {
    if (!has_clicked.value) return

    gsap.set("#next-video", { visibility: "visible" })
    gsap.to("#next-video", {
      transformOrigin: "center center",
      scale: 1,
      width: "100%",
      height: "100%",
      duration: 1,
      ease: "power1.inOut",
      onStart: () => next_video_ref.value?.play(),
    })
    gsap.from("#current-video", {
      transformOrigin: "center center",
      scale: 0,
      duration: 1.5,
      ease: "power1.inOut",
    })
  },
  { scope: root_ref, dependencies: [current_index], revertOnUpdate: true },
)

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
    ref="root"
    class="relative h-dvh w-screen overflow-x-hidden"
  >
    <div
      id="video-frame"
      class="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
    >
      <div>
        <div
          class="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
        >
          <div
            @click="handleMiniVideoClick"
            class="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              id="current-video"
              class="size-64 origin-center scale-150 object-cover object-center"
              ref="next_video"
              :src="getVideoSource(upcoming_video_index)"
              loop
              muted
              @canplaythrough="handleVideoLoad"
            />
          </div>
        </div>

        <video
          ref="next_video_ref"
          :src="getVideoSource(current_index)"
          loop
          muted
          id="next-video"
          class="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          @canplaythrough="handleVideoLoad"
        />

        <video
          :src="getVideoSource(current_index === total_videos - 1 ? 1 : current_index)"
          autoplay
          loop
          muted
          class="absolute top-0 left-0 size-full object-cover"
          @canplaythrough="handleVideoLoad"
        />
      </div>

      <h1 class="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
        G<b>a</b>ming
      </h1>

      <div class="absolute top-0 left-0 z-40 size-full">
        <div class="mt-24 px-5 sm:px-10">
          <h1 class="special-font hero-heading text-blue-100">Redefi<b>n</b>e</h1>

          <p class="font-robert-regular mb-5 max-w-64 text-blue-100">
            Enter the Metagame Layer <br />
            Unleash the Play Economy
          </p>

          <custom-button
            id="watch-trailer"
            title="Watch Trailer"
            left-icon="typcn:location-arrow"
            class="flex-center gap-1 bg-yellow-300!"
          />
        </div>
      </div>
    </div>

    <h1 class="special-font hero-heading absolute right-5 bottom-5 text-black">G<b>a</b>ming</h1>
  </div>
</template>
