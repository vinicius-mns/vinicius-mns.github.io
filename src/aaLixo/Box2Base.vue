<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    links?: string[]
  }>(),
  {
    title: 'Empty',
    links: () => ['empty', 'empty']
  }
)

const sizes = {
  desktop: {
    left: '60px',
    top: '68px',
    width: 'calc(100dvw - 60px * 2)',
    height: 'calc(100dvh - 68px * 2)'
  },
  mobile: {
    left: '10px',
    top: '28px',
    width: 'calc(100dvw - 10px * 2)',
    height: 'calc(100dvh - 48px * 2)'
  }
}

const size = reactive({ ...sizes.desktop })

const x = ref('0deg')

const y = ref('0deg')

const handleResize = () => {
  const screen = window.innerWidth
  const isMobile = screen < 768

  isMobile ? Object.assign(size, sizes.mobile) : Object.assign(size, sizes.desktop)
}

const handlePerspective = (mouse: MouseEvent) => {
  const midTop = window.innerHeight / 2
  const midLeft = window.innerWidth / 2
  const mouseX = mouse.clientX - midLeft
  const mouseY = mouse.clientY - midTop

  x.value = `${mouseX / -260}deg`
  y.value = `${mouseY / 180}deg`
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="box-container border-all" @mousemove="handlePerspective">
    <div class="left border-right">
      <div class="top">
        <h1>{{ props.title }}</h1>
      </div>

      <div class="bottom border-top">
        <div class="list">
          <p v-for="(link, i) in props.links" :key="i">{{ link }}</p>
          <!-- <p>home</p>
          <p>Projetos</p>
          <p>Contato</p> -->
        </div>
      </div>
    </div>

    <div class="right">
      <p>linkedin</p>
      <p>github</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$top: v-bind('size.top');
$left: v-bind('size.left');
$width: v-bind('size.width');
$height: v-bind('size.height');

.border-all {
  border: solid 1px white;
}

.border-right {
  border-right: solid 1px white;
}

.border-top {
  border-top: solid 1px white;
}

.box-container {
  position: fixed;
  top: $top;
  left: $left;
  box-sizing: border-box;
  display: flex;

  opacity: 0;
  width: 0;
  height: 0;
  animation: init 0.3s forwards;

  transition: all 0.3s ease-out;
  transform-style: preserve-3d;
  transform: perspective(1200px) rotateX(v-bind('y')) rotateY(v-bind('x'));

  & .left {
    width: 37.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    & .top {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;

      & h1 {
        height: fit-content;
        padding: 20px;
        margin: 0;
      }
    }

    & .bottom {
      flex-shrink: 0;
      width: 100%;
      height: 62.5%;
      display: flex;
      justify-content: end;

      & .list {
        margin: 20px;
        height: fit-content;

        & p {
          margin: 0;
          padding: 10px;
          padding-left: 40px;
          cursor: pointer;
          text-align: end;

          &:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }

  & .config-template-container {
    width: 62.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
      margin: 0;
      padding: 3px;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
}

@keyframes init {
  to {
    opacity: 1;
    width: $width;
    height: $height;
  }
}
</style>
