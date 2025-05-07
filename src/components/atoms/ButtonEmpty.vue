<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    img?: string
    name?: string
  }>(),
  {
    img: '',
    name: ''
  }
)

// const bgImg = {
//   'background-image': `url(${props.img})`,
//   'background-size': 'cover',
//   'background-position': 'center'
// }

const haveImg = computed(() => props.img !== '')
</script>

<template>
  <!-- <div>
    <div class="empty-button" v-if="props.name !== ''">
      <img :src="img" alt="imagem" />
    </div>
  </div> -->

  <button class="empty-button">
    <div class="item-container" v-if="haveImg">
      <h2>{{ props.name }}</h2>
    </div>

    <div class="empty crossone" v-if="!haveImg"></div>

    <div class="empty crosstwo" v-if="!haveImg"></div>

    <div class="empty horizontal top-left"></div>

    <div class="empty horizontal top-right"></div>

    <div class="empty horizontal bottom-left"></div>

    <div class="empty horizontal bottom-right"></div>

    <div class="empty vertical left-top"></div>

    <div class="empty vertical left-bottom"></div>

    <div class="empty vertical right-top"></div>

    <div class="empty vertical right-bottom"></div>
  </button>
</template>

<style scoped lang="scss">
.empty-button {
  // $width: 268px;
  $width: 100%;
  $height: 62px;
  $borderSize: 16px;
  $position: 1px;

  background-color: transparent;
  transition: all 0.2s;

  overflow: hidden;

  position: relative;
  width: $width;
  height: $height;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  & .item-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    // background-color: rgba(99, 99, 99, 0.1);

    // & .img-container {
    //   height: 100%;
    //   aspect-ratio: 1;
    //   overflow: hidden;
    //   padding: 10px;
    //   box-sizing: border-box;

    //   & img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: cover;
    //   }
    // }

    & h2 {
      margin: 0;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  & .empty {
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: white;
  }

  & .crossone {
    transform: rotate(45deg);
  }

  & .crosstwo {
    transform: rotate(-45deg);
  }

  & .horizontal {
    width: $borderSize;
    background-color: whire;
  }

  & .vertical {
    height: $borderSize;
    width: 1px;
  }

  & .top-left {
    top: $position;
    left: $position;
  }

  & .top-right {
    top: $position;
    right: $position;
  }

  & .bottom-left {
    bottom: $position;
    left: $position;
  }

  & .bottom-right {
    bottom: $position;
    right: $position;
  }

  & .left-top {
    left: $position;
    top: $position;
  }

  & .left-bottom {
    left: $position;
    bottom: $position;
  }

  & .right-top {
    right: $position;
    top: $position;
  }

  & .right-bottom {
    right: $position;
    bottom: $position;
  }

  &:hover {
    transform: scale(1.05);
    // padding: 5px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
