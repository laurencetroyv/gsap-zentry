<script lang="ts" setup>
const item_ref = useTemplateRef("item-ref")

const transform_style = ref("")

function handleMouseMove(e: MouseEvent) {
  if (!item_ref.value) return
  const { left, top, width, height } = item_ref.value.getBoundingClientRect()

  const relative_x = (e.clientX - left) / width
  const relative_y = (e.clientY - top) / height

  const tilt_x = (relative_y - 0.5) * 5
  const tilt_y = (relative_x - 0.5) * 5

  transform_style.value = `perspective(700px) rotateX(${tilt_x}deg) rotateY(${tilt_y}deg) scale3d(0.98, 0.98, 0.98)`
}

function handleMouseLeave(e: MouseEvent) {}
</script>

<template>
  <div
    ref="item-ref"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="`transform: ${transform_style}`"
  >
    <slot />
  </div>
</template>
