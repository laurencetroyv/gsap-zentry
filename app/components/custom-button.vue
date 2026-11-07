<script setup lang="ts">
interface Props {
  id?: string
  rightIcon?: string
  leftIcon?: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <button
    :id="id"
    class="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
  >
    <icon
      v-if="leftIcon"
      :name="leftIcon"
    />

    <span class="font-general relative inline-flex overflow-hidden text-xs uppercase">
      {{ title }}
    </span>

    <icon
      v-if="rightIcon"
      :name="rightIcon"
    />
  </button>
</template>
