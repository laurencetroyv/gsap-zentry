<script setup lang="ts">
const LINKS = [
  { href: "https://discord.com", icon: "mdi:discord" },
  { href: "https://x.com", icon: "mdi:twitter" },
  { href: "https://github.com", icon: "mdi:github" },
  { href: "https://twitch.com", icon: "mdi:twitch" },
]
</script>

<template>
  <footer class="w-screen bg-violet-300 py-4 text-black">
    <div
      class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row"
    >
      <p class="text-center text-sm md:text-left">&copy; laurencetroyv 2026. All rights reserved.</p>

      <div class="flex justify-center gap-4 md:justify-start">
        <a
          v-for="link in LINKS"
          target="_blank"
          rel="noopener noreferrer"
          class="text-black transition-colors duration-500 ease-in-out hover:text-white cursor-pointer"
          :key="link.href"
        >
          <icon :name="link.icon" />
        </a>
      </div>

      <a
        href="#"
        class="text-center text-sm hover:underline md:text-right hover:text-white cursor-pointer"
        >Privacy Policy</a
      >
    </div>
  </footer>
</template>

<style scoped></style>
