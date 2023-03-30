<script setup lang="ts">
import QuemSou from './pages/QuemSou.vue';
import NavigationBar from './components/navigationBar/NavigationBar.vue'
import gear from '@/assets/gear.png'
import { useGlobalStyle } from './stores/globalStyle';
import { ref } from 'vue';

const style = useGlobalStyle()

const toggleNav = ref(false)
</script>

<template>
  <div class="app">
    <div class="navigation" :class="{toggleNav}" :style="[style.cardStyle, style.navigationStyle]">
      <button @click="toggleNav = !toggleNav" class="button-toggle-nav">
        <div></div><div></div><div></div>
      </button>
      <NavigationBar v-if="!toggleNav" />
    </div>
    
    <div class="pages">
      <div class="container-pages">
        <QuemSou />
      </div>
    </div>

    <div class="container-mobile-bar" :style="style.cardStyle">
      <div class="container-buttons-bar">
        <button class="settings-button-mobile" :style="style.cardStyle"><img :src="gear" alt="settings"></button>
        <button class="button-toggle-nav-mobile" :style="style.cardStyle"><p>Ir para</p></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Red+Hat+Display:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1rem;
}

body {
  background-color: rgb(178, 212, 156);
}

h1, h2, h3, p, span {
  margin: 0.5rem;
}

h1 {
    font-size: 2rem;
}

a {
  text-decoration: none;
  color: black;
}

.button-toggle-nav {
  position: absolute;
  left: 0;
  width: 1.3rem;
  height: 1.3rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  background-color: transparent;

  & div {
    width: 100%;
    height: 0.2rem;
    border-radius: 10rem;
    background-color: black;
  }
}

// mobile
@media screen and (max-width: 700px) {
  .app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pages {
    width: 92%;
    margin-bottom: 5rem;
    text-align: justify;
  }

  .container-mobile-bar {
    position: fixed;
    width: 50%;
    height: 3rem;
    bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & .container-buttons-bar {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;

      & .settings-button-mobile {
        height: 80%;
        margin: 0.5rem;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
          height: 90%;
          color: black;
        }
      }

      & .button-toggle-nav-mobile {
        margin: 0.5rem;
        height: 80%;
        flex-grow: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .navigation {
    display: none;
  }
}

// desktop
@media screen and (min-width: 1024px) {
  .app {
    width: 100%;
    display: flex;
  }

  .navigation {
    height: 100vh;
    width: 20%;
  }

  .toggleNav {
    width: 0;
  }

  .pages {
    width: 100%;
    text-align: justify;
    overflow-y: scroll;
    height: 100vh;
    & .container-pages {
      width: 55%;
      margin-left: 22.5%;
    }
  }
  
  .container-mobile-bar {
    display: none;
  }
}

// tablet
@media screen and (min-width: 701px) and (max-width: 1023px) {
  .app {
    width: 100%;
    display: flex;
  }

  .navigation {
    height: 100vh;
    width: 35%;
  }

  .toggleNav {
    width: 0;
  }

  .pages {
    width: 100%;
    text-align: justify;
    overflow-y: scroll;
    height: 100vh;
    & .container-pages {
      width: 80%;
      margin-left: 10%;
    }
  }

  .container-mobile-bar {
    display: none;
  }
}
</style>
