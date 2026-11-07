<script lang="ts" setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const { is_loading } = useAppLoader()
const lenis_ref = useTemplateRef("lenis-ref")

watchEffect(onCleanup => {
  const lenis = lenis_ref.value?.lenis
  const update = (time: number) => lenis?.raf(time * 1000)

  if (import.meta.client) {
    document.body.style.overflow = is_loading.value ? "hidden" : ""
  }

  lenis?.on("scroll", ScrollTrigger.update)
  gsap.ticker.add(update)
  gsap.ticker.lagSmoothing(0)

  onCleanup(() => {
    lenis?.off("scroll", ScrollTrigger.update)
    gsap.ticker.remove(update)
  })
})
</script>

<template>
  <vue-lenis
    root
    ref="lenis-ref"
    :options="{ autoRaf: false }"
  />

  <loading-animation v-if="is_loading" />
  <main class="min-h-scren relative w-screen overflow-x-hidden">
    <navbar />
    <hero />
    <about />
    <features />
    <story />
    <contact />
    <custom-footer />
  </main>
</template>
