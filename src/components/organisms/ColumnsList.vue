<script setup lang="ts">
import { computed, ref, type Component } from 'vue'
import RangeImput from '../atoms/RangeImput.vue'
import HeaderBase from '../molecules/HeaderBase.vue'

interface ComponentWithProps {
  props: { [key: string]: any }
  component: Component
}

const props = defineProps<{ components: ComponentWithProps[] }>()

const columns = ref(4)

const ColumnsWithComponents = computed(() => {
  const projectInColumns = Array.from({ length: columns.value }, () => [] as ComponentWithProps[])

  const components = props.components

  for (let i = 0; i < components.length; i += 1) {
    const indexColumn = i % columns.value
    projectInColumns[indexColumn].push(components[i])
  }

  return projectInColumns
})
</script>

<template>
  <div class="list-main-container">
    <HeaderBase title="" class="list-header">
      <div class="range-container">
        <p>Colunas:</p>

        <p>[{{ columns }}]</p>

        <RangeImput
          class="range-imput"
          :limit="{ min: 1, max: 6 }"
          :init-value="columns"
          name="project-columns"
          @emit-value="($event) => (columns = $event)"
        />
      </div>
    </HeaderBase>

    <div class="projects-list">
      <div class="projects-column" v-for="(column, i) in ColumnsWithComponents" :key="i">
        <component
          class="component"
          v-for="(component, i) in column"
          :key="i"
          :is="component.component"
          v-bind="component.props"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 40px;
  box-sizing: border-box;

  & .list-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 30px;

    & h1 {
      flex-shrink: 0;
    }

    & .range-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: end;

      & p {
        margin-right: 14px;
      }

      & .range-imput {
        width: 100%;
        width: 200px;
      }
    }
  }

  & .projects-list {
    // background-color: red;
    margin-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px 0 50px;
    // box-sizing: border-box;
    // margin-top: 10px;

    & .projects-column {
      $margin: 60px;

      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .component {
        width: calc(100% - $margin);
        margin-bottom: $margin;
      }
    }
  }
}
</style>
