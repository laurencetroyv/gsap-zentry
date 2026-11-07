<script setup lang="ts">
import gsap from "gsap"
const frame_ref = useTemplateRef("frame-ref")

function handleMouseLeave(e: MouseEvent) {
  const element = frame_ref.value

  if (!element) return

  gsap.to(element, {
    duration: 0.3,
    rotateX: 0,
    rotateY: 0,
    ease: "power1.inOut",
  })
}

function handleMouseMove(e: MouseEvent) {
  const { clientX, clientY } = e

  const element = frame_ref.value

  if (!element) return

  const rect = element.getBoundingClientRect()
  const x = clientX - rect.left
  const y = clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -10
  const rotateY = ((x - centerX) / centerX) * -10

  gsap.to(element, {
    duration: 0.3,
    rotateX,
    rotateY,
    transformPerspective: 500,
    ease: "power1.inOut",
  })
}
</script>

<template>
  <section
    id="story"
    class="min-h-dvh w-screen bg-black text-blue-50"
  >
    <div class="flex size-full flex-col items-center py-10 pb-24">
      <p class="font-general text-sm uppercase md:text-[10px]">An Isolated Archipelago</p>

      <div class="relative size-full">
        <animated-title
          title="The story of a hidden realm"
          section-id="#story"
          class="pointer-events-none relative z-10 mt-5 mix-blend-difference"
        />

        <div class="story-img-container">
          <div class="story-img-mask">
            <div class="story-img-content">
              <img
                @mouseleave="handleMouseLeave"
                @mouseup="handleMouseLeave"
                @mouseenter="handleMouseLeave"
                @mousemove="handleMouseMove"
                ref="frame-ref"
                src="/img/entrance.png"
                alt="entrance"
                class="object-contain"
              />
            </div>
          </div>

          <rounded-corners />
        </div>
      </div>

      <div class="-mt-80 flex w-full justify-center md:me-44 md:-mt-64 md:justify-end">
        <div class="flex h-full w-fit flex-col items-center md:items-start">
          <p class="font-circular-web mt-3 max-w-sm text-center text-violet-50 md:text-start">
            Overcome endless thunderstorms and set foot on the islands of red maple and cherry blossoms.
          </p>

          <custom-button
            id="realm-button"
            title="Discover Prologue"
            class="mt-5"
            @click="navigateTo('https://www.youtube.com/watch?v=nU0MnCpsUD4', { external: true })"
          />
        </div>
      </div>
    </div>
  </section>
</template>
