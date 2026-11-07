<script lang="ts" setup>
interface Props {
  src: string
  title: string
  description?: string
  descriptionColor?: string
}

defineProps<Props>()
</script>

<template>
  <div class="relative size-full">
    <video
      :src="src"
      loop
      muted
      autoplay
      class="absolute top-0 left-0 size-full object-cover object-center"
    />

    <div class="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
      <h1
        class="bento-title special-font text-[#20293D]"
        v-html="title"
      ></h1>
      <p
        v-if="description"
        class="mt-3 max-w-64 text-xl md:text-base p-2 bg-black/20 rounded-md"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
