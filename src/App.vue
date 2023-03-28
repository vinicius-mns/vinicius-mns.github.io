<script setup lang="ts">
import QuemSou from './pages/QuemSou.vue';
</script>

<template>
  <div class="app">
    <div class="pages">
      <QuemSou />
    </div>
    
    <div class="buttons"><button>A</button><button>B</button></div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

// mobile
@media screen and (max-width: 500px) {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Red+Hat+Display:wght@300&display=swap');

  * {
    background-color: rgb(178, 212, 156);
    font-family: 'Montserrat', sans-serif;
    font-family: 'Red Hat Display', sans-serif;
  }

  .pages {
    width: 100%;
    margin-bottom: 4rem;
    font-size: 0.9rem;
    text-align: justify;
    background-color: rgb(250, 241, 241);
  }

  h1 {
    font-size: 2rem;
  }
  
  .buttons {
    width: 100%;
    position: fixed;
    bottom: 2rem;

    display: flex;
    justify-content: space-around;
    
    & button {
      border: solid black 1.5px;
      background-color: rgb(215, 165, 165);
      color: black;
      box-shadow: 6px 6px 0px black;
      border-radius: 8px;
      width: 40%;
      height: 2.5rem;
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

</style>
