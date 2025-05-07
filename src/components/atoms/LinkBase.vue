<script setup lang="ts">
const props = defineProps<{
  toName: string
  content: string
}>()
</script>

<template>
  <RouterLink class="link" :to="{ name: props.toName }">
    {{ props.content }}
  </RouterLink>
</template>

<style scoped lang="scss">
.link {
  margin: 0;
  padding: 10px;
  color: white;
  text-decoration: none;
  position: relative;

  &:hover {
    background-color: black;
    filter: invert(1);
  }
}

.router-link-active {
  &::before {
    content: '';
    background-color: white;
    height: 6px;
    aspect-ratio: 1;
    position: absolute;
    top: 18px;
    left: 30px;
  }
}
</style>
