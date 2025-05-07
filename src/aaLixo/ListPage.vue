<script setup lang="ts">
import { computed, ref } from 'vue'
import ButtonEmpty from '../atoms/ButtonEmpty.vue'
import RangeImput from '../atoms/RangeImput.vue'
import HeaderBase from '../molecules/HeaderBase.vue'

const props = withDefaults(
  defineProps<{
    title: string
    initEmpryButtonsCount?: number
    // itens: { img: string; name: string }[]
  }>(),
  {
    initEmpryButtonsCount: 0
  }
)

const emptyItem = { img: '', name: '' }

const li = [
  {
    img: 'https://preview.redd.it/n5ndd6a32z961.png?width=640&crop=smart&auto=webp&s=93e0bd2223b53d67455d31d1daa2c529faabed41',
    name: 'Triu parada dura'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls6MurQmBvdIjP6rNYg_WjZJ1XE1oYQon4A&s',
    name: 'Domingo legal'
  },
  {
    img: 'https://artfiles.alphacoders.com/114/thumb-1920-114979.jpg',
    name: 'Elsword'
  },
  {
    img: 'https://getbots.com.br/wp-content/uploads/2022/09/o-que-e-api-2-min.jpg',
    name: 'Banana frita'
  },
  {
    img: 'https://media.istockphoto.com/id/1047259374/pt/foto/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=RiXR5C_Lnp4MEL_c27pf_bNC7dyurRQpnSwDaNEhS0o=',
    name: 'Generico'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls6MurQmBvdIjP6rNYg_WjZJ1XE1oYQon4A&s',
    name: 'Domingo legal'
  },
  {
    img: 'https://artfiles.alphacoders.com/114/thumb-1920-114979.jpg',
    name: 'Elsword'
  },
  {
    img: 'https://getbots.com.br/wp-content/uploads/2022/09/o-que-e-api-2-min.jpg',
    name: 'Banana frita'
  },
  {
    img: 'https://media.istockphoto.com/id/1047259374/pt/foto/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=RiXR5C_Lnp4MEL_c27pf_bNC7dyurRQpnSwDaNEhS0o=',
    name: 'Generico'
  }
]

const emptyButtons = computed(() =>
  Array.from({ length: props.initEmpryButtonsCount }, () => emptyItem)
)

const list = ref([...li, ...emptyButtons.value])

// const emptyButtonsCount = ref(props.initEmpryButtonsCount)

// const emptyButtons = computed(() => Array.from({ length: list.value.length }, () => emptyItem))

const columns = ref(4)

const emit = defineEmits<{
  (e: 'emit-project', project: string): void
}>()

const projectColumns = computed(() => {
  const projectInColumns = Array.from(
    { length: columns.value },
    () => [] as { img: string; name: string }[]
  )

  for (let i = 0; i < list.value.length; i += 1) {
    const indexColumn = i % columns.value
    projectInColumns[indexColumn].push(list.value[i])
  }

  return projectInColumns
})

const emitProject = (project: string) => {
  emit('emit-project', project)
}
</script>

<template>
  <div class="list-main-container">
    <HeaderBase :title="props.title" class="list-header">
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
      <div class="projects-column" v-for="(column, i) in projectColumns" :key="i">
        <ButtonEmpty
          v-for="(button, i) in column"
          :key="i"
          :img="button.img"
          :name="button.name"
          class="button-empty"
          @click="emitProject('')"
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

      & .button-empty {
        width: calc(100% - $margin);
        margin-bottom: $margin;
      }
    }
  }
}
</style>
