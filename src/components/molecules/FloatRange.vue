<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import RangeImput from '../atoms/RangeImput.vue'

const props = defineProps<{
  value: number
  name: string
  limit: {
    min: number
    max: number
  }
}>()

const emit = defineEmits<{
  (e: 'emitValue', value: number): void
}>()

const range = reactive({
  show: false,
  value: 0,
  name: 'default',
  limit: { min: 0, max: 100 }
})

const showRange = (v: boolean) => {
  range.show = v
}

const setRange = (v: number) => {
  range.value = v

  emit('emitValue', v)
}

onMounted(() => {
  range.value = props.value
  range.name = props.name
  range.limit = props.limit
})
</script>

<template>
  <div class="float-range-container" @mouseenter="showRange(true)" @mouseleave="showRange(false)">
    <p>{{ range.name }}</p>

    <div class="range-container" v-show="range.show">
      <div class="range-title">
        <h2>{{ range.name }}</h2>
        <p>{{ [range.value] }}</p>
      </div>

      <RangeImput
        :init-value="props.value"
        :name="props.name"
        :limit="props.limit"
        @emit-value="(v: number) => setRange(v)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.float-range-container {
  cursor: pointer;
  position: relative;

  & p {
    padding: 0;
    margin: 0;
    // position: relative;
  }

  & .range-title {
    display: flex;
    align-items: center;
    // justify-content: space-between;

    & p {
      margin-left: 10px;
      font-size: 20px;
      filter: invert(1);
    }
  }

  & .range-container {
    border: solid 1px white;
    $width: 268px;
    position: absolute;
    bottom: 0;
    left: -$width;
    width: $width;
    height: fit-content;
    padding: 20px;
    box-sizing: border-box;

    & h2 {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 768px) {
    & .range-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:hover {
    background-color: white;
    & p {
      color: black;
    }
  }
}
</style>
