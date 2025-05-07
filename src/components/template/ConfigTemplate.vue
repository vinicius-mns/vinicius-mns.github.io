<script setup lang="ts">
import CheckboxBase from '../atoms/CheckboxBase.vue'
import { useGlobalState } from '@/stores/globalState'
import FloatRange from '../molecules/FloatRange.vue'

const { trackBall, darkMode, swing, opacity } = useGlobalState()
</script>

<template>
  <div class="config-options-container">
    <CheckboxBase
      class="option"
      :check="darkMode.status.dark"
      content="Modo escuro"
      @emit-check="darkMode.metod.darkMode($event)"
    />

    <FloatRange
      class="option"
      :value="opacity.status.opacity"
      name="Opacidade"
      :limit="{ min: 0, max: 100 }"
      @emit-value="opacity.metod.setOpacity($event)"
    />

    <CheckboxBase
      class="option"
      :check="trackBall.status.show"
      content="Track ball"
      @emit-check="trackBall.metod.show($event)"
    />

    <CheckboxBase
      class="option"
      :check="swing.status.swing"
      content="Balanço"
      @emit-check="swing.metod.swingMode($event)"
    />
  </div>
</template>

<style scoped lang="scss">
.config-options-container {
  display: flex;
  flex-direction: column;

  & .option {
    margin: 0;
    padding: 10px;
  }
}
</style>
