<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<template>
  <header class="header-container">
    <!-- <h1>{{ props.title }}</h1> -->

    <div class="header-space">
      <slot />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;

  & h1 {
    flex-shrink: 0;
  }
}
</style>
