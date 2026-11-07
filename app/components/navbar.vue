<script setup lang="ts">
import gsap from "gsap"

const AUDIO_BARS = [1, 2, 3, 4]
const NAV_ITEMS = ["Home", "About", "Features", "Story", "Contact"]

const audio_ref = useTemplateRef("audio-ref")
const container_ref = useTemplateRef("nav-container")

const is_audio_playing = ref(false)
const is_indicator_active = ref(false)
const last_scroll_y = ref(0)
const is_nav_visible = ref(true)

const { y: current_scroll_y } = useWindowScroll()

function toggleAudioIndicator() {
  is_audio_playing.value = !is_audio_playing.value
  is_indicator_active.value = !is_indicator_active.value
}

watch(is_audio_playing, () => {
  if (is_audio_playing.value) {
    audio_ref.value?.play()
  } else {
    audio_ref.value?.pause()
  }
})

watch([current_scroll_y, last_scroll_y], () => {
  if (current_scroll_y.value === 0) {
    is_nav_visible.value = true
    container_ref.value?.classList.remove("floating-nav")
  } else if (current_scroll_y.value > last_scroll_y.value) {
    is_nav_visible.value = false
    container_ref.value?.classList.add("floating-nav")
  } else if (current_scroll_y.value < last_scroll_y.value) {
    is_nav_visible.value = true
    container_ref.value?.classList.add("floating-nav")
  }

  last_scroll_y.value = current_scroll_y.value
})

watch(is_nav_visible, () => {
  gsap.to(container_ref.value, {
    y: is_nav_visible.value ? 0 : -100,
    opacity: is_nav_visible ? 1 : 0,
    duration: 0.2,
  })
})
</script>

<template>
  <div
    ref="nav-container"
    class="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
  >
    <header class="absolute top-1/2 w-full -translate-y-1/2">
      <nav class="flex size-full items-center justify-between p-4">
        <div class="flex items-center gap-7">
          <img
            src="/img/logo.jpg"
            alt="logo"
            class="w-10 h-10 rounded-full object-cover"
          />

          <custom-button
            id="product-button"
            title="Download"
            right-icon="typcn:location-arrow"
            @click="navigateTo('https://genshin.hoyoverse.com/', {external: true})"
            class="hidden items-center justify-center gap-1 bg-blue-50 md:flex"
          />
        </div>

        <div class="flex h-full items-center">
          <div class="hidden md:block">
            <a
              v-for="(item, index) in NAV_ITEMS"
              :key="index"
              class="nav-hover-btn"
              :href="`#${item.toLowerCase()}`"
            >
              {{ item }}
            </a>
          </div>

          <div
            role="button"
            class="ml-10 flex cursor-pointer items-center space-x-0.5"
            @click="toggleAudioIndicator"
          >
            <audio
              ref="audio-ref"
              class="hidden"
              src="/audio/loop.mp3"
              loop
            />

            <div
              v-for="bar in AUDIO_BARS"
              :key="bar"
              :class="`indicator-line ${is_indicator_active ? 'active' : ''}`"
              :style="`animation-delay: ${bar * 0.1}s`"
            />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
