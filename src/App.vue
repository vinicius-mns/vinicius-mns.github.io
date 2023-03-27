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
  .pages {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .buttons {
    width: 100%;
    position: fixed;
    bottom: 0;

    background-color: blue;
    display: flex;

    & button {
      width: 50%;
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
