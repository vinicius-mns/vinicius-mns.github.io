<script setup lang="ts">
import { reactive, ref } from 'vue'
import ButtonBase from '../atoms/ButtonBase.vue'
import AboutMe from './AboutMe.vue'
import MyPojects from '../views/MyPojects.vue'
import IdleAnimation from '../views/IdleAnimation.vue'
import ContactMe from '../views/ContactMe.vue'
import IntroPage from '../template/IntroPage.vue'
import BallTrack from '../atoms/BallTrack.vue'
import MessageFloat from '../template/MessageFloat.vue'

const size = ref('40px')

const x = ref('0px')

const y = ref('-50px')

const messageStatus = reactive({
  show: false,
  msg: ''
})

const track = (cursor: MouseEvent) => {
  const ballSize = parseFloat(size.value)

  x.value = `${cursor.clientX - ballSize / 2}px`
  y.value = `${cursor.clientY - ballSize / 2}px`
}

const routes = ['Quem sou eu', 'Projetos', 'Contato']

const atualRoute = ref('')

const setRoute = (route: string) => (atualRoute.value = route)

const isRoute = (route: string) => {
  return route === atualRoute.value
}

const handleMsg = (msg: string) => {
  messageStatus.show = true
  messageStatus.msg = msg

  setTimeout(() => {
    messageStatus.show = false
  }, 2000)
}

const handleProject = (msg: string) => {
  if (msg === '') {
    handleMsg('Nada aconteceu')
    return
  }
}
</script>

<template>
  <div class="main-container" @mousemove="track">
    <IdleAnimation />

    <AboutMe class="page" v-if="atualRoute === ''" />

    <MyPojects class="page" v-if="atualRoute === 'Projetos'" @emit-project="handleProject" />

    <ContactMe class="page" v-if="atualRoute === 'Contato'" />

    <!-- <IntroPage class="intro-page" v-if="atualRoute === ''" /> -->

    <BallTrack :x="x" :y="y" :size="size" class="ball-track" />

    <MessageFloat class="message" v-show="messageStatus.show" :msg="messageStatus.msg" />

    <div class="bottons-container">
      <ButtonBase
        :check="isRoute(route)"
        v-for="(route, i) in routes"
        :key="i"
        :content="route"
        @click="setRoute(route)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  background-color: #1a1a1a;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;

  & .bottons-container {
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: auto;
    height: 85px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    & .button {
      height: 38px;
      margin: 0 4px;
    }
  }

  & .intro-page {
    z-index: 2;
  }

  & .message {
    z-index: 4;
  }

  & .ball-track {
    z-index: 3;
  }
}
</style>
