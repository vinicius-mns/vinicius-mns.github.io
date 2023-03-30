<script setup lang="ts">
import QuemSou from './pages/QuemSou.vue';
import RouterLinks from './components/RouterLinks.vue'
import ConfigCard from './components/configCard/ConfigCard.vue'
import gear from '@/assets/gear.png'
</script>

<template>
  <div class="app">
    <ConfigCard />
    <div class="pages">
      <QuemSou />
    </div>
    
    <div class="buttons">
      <button class="config neo-button"><img :src="gear" alt="config"></button>
      <div class="links">
        <RouterLinks />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Red+Hat+Display:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  background-color: rgb(178, 212, 156);
  font-family: 'Montserrat', sans-serif;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1rem;
}

.neo-card {
  border: solid black 0.1rem;
  background-color: rgb(215, 165, 165);
  color: black;
  border-radius: 0.5rem;
}

.neo-button {
  border: solid black 0.12rem;
  background-color: rgb(215, 165, 165);
  color: black;
  box-shadow: 0.2rem 0.2rem black;
  border-radius: 0.5rem;

  &:active {
    transform: translate(0.2rem, 0.2rem);
        box-shadow: none;
  }
}

// mobile
@media screen and (max-width: 500px) {
  h1 {
    font-size: 2rem;
  }

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

  .buttons {
    position: fixed;
    width: 92%;
    height: 3.5rem;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & button {
      height: 2rem;

      &.config {
        width: 10%;
        & img {
          height: 95%;
          background-color: transparent;
        }
      }
    }

    & .links {
      width: 85%;
      height: 100%;
      overflow-y: scroll;
    }
  }
}

// desktop
@media screen and (min-width: 500px) {
  .pages {
    width: 100%;
  }
  
  .buttons {
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
