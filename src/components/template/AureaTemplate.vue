<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import LinkBase from '../atoms/LinkBase.vue'
import { useGlobalState } from '@/stores/globalState'

const { swing } = useGlobalState()

const props = withDefaults(
  defineProps<{
    title?: string
    links: { name: string; nameLink: string }[]
  }>(),
  {
    title: 'Empty'
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

const classIntro = ref('')

const classIntroPage = ref('')

watch(
  () => props.title,
  () => {
    classIntro.value = 'intro'
    classIntroPage.value = 'intro-page'

    setTimeout(() => {
      classIntro.value = ''
      classIntroPage.value = ''
    }, 500)
  }
)
</script>

<template>
  <div
    :class="['box-container', 'border-all', { swing: swing.status.swing }]"
    @mousemove="handlePerspective"
  >
    <div class="left border-right">
      <div class="top">
        <h1 :class="classIntro">{{ props.title }}</h1>
      </div>

      <div class="bottom border-top">
        <nav class="list">
          <LinkBase
            class="link"
            v-for="(link, i) in props.links"
            :key="i"
            :to-name="link.nameLink"
            :content="link.name"
          />
        </nav>
      </div>
    </div>

    <div :class="['right', { 'intro-page': classIntroPage }]">
      <slot />
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
  width: $width;
  height: $height;
  box-sizing: border-box;
  display: flex;

  animation: init 0.5s forwards;

  .intro {
    animation: intro 0.5s forwards;
  }

  & .left {
    width: 27.5%;
    flex-shrink: 0;
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
        margin: 20px 15px;
        height: fit-content;
        display: flex;
        flex-direction: column;

        & .link {
          text-align: end;
          padding-left: 40px;
        }

        // & .link {
        //   margin: 0;
        //   padding: 10px 10px 10px 30px;
        //   text-align: end;
        //   position: relative;
        //   color: white;
        //   text-decoration: none;

        //   &:hover {
        //     background-color: black;
        //     filter: invert(1);
        //     // background-color: white;
        //     // color: black;
        //   }
        // }

        // & .router-link-active {
        //   &::before {
        //     content: '';
        //     background-color: white;
        //     height: 6px;
        //     aspect-ratio: 1;
        //     position: absolute;
        //     top: 18px;
        //     left: 10px;
        //   }
        // }
      }
    }
  }

  & .right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // & p {
    //   margin: 0;
    //   padding: 3px;
    //   cursor: pointer;

    //   &:hover {
    //     background-color: white;
    //     color: black;
    //   }
    // }
  }

  & .intro-page {
    animation: introPage 0.5s forwards;
  }
}

.swing {
  transition: all 0.3s ease-out;
  transform-style: preserve-3d;
  transform: perspective(1200px) rotateX(v-bind('y')) rotateY(v-bind('x'));
}

@keyframes init {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    // width: $width;
    height: $height;
  }
}

@keyframes intro {
  from {
    opacity: 0;
    margin-right: 80px;
  }
  to {
    opacity: 1;
    margin-right: 0;
  }
}

@keyframes introPage {
  from {
    opacity: 0;
    margin-top: 80px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
</style>
