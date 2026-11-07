<script setup lang="ts">
defineProps<{
  src: HTMLImageElement["src"]
}>()
</script>
<template>
  <div>
    <img
      :src="src"
      alt="clip-box img"
    />
  </div>
</template>
