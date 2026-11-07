<script setup lang="ts">
import gsap from "gsap"

defineProps<{ title: string }>()

let ctx: gsap.Context
const container_ref = useTemplateRef("container-ref")

onMounted(() => {
  ctx = gsap.context(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: container_ref.value,
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    })

    titleAnimation.to(
      ".animated-word",
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      },
      0,
    )
  }, container_ref.value as Element)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div
    ref="container-ref"
    class="animated-title"
  >
    <div
      v-for="(text, index) in title.split('<br/>')"
      :key="index"
      class="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
    >
      <span
        v-for="(word, index) in text.split(' ')"
        :key="index"
        class="animated-word special-font"
        v-html="word"
      >
      </span>
    </div>
  </div>
</template>
