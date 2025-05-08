<script setup lang="ts">
import CheckboxBase from '@/components/atoms/CheckboxBase.vue'
import { useGlobalState } from '@/stores/globalState'
import FloatRange from '@/components/molecules/FloatRange.vue'
import { onMounted, onUpdated } from 'vue'

const { trackBall, darkMode, swing, opacity, mobile } = useGlobalState()
</script>

<template>
  <div class="config-page">
    <!-- <ConfigTemplate /> -->
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
        v-if="!mobile.status.isMobileSize"
        class="option"
        :check="trackBall.status.show"
        content="Track ball"
        @emit-check="trackBall.metod.show($event)"
      />

      <CheckboxBase
        v-if="!mobile.status.isMobileSize"
        class="option"
        :check="swing.status.swing"
        content="Balanço"
        @emit-check="swing.metod.swingMode($event)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.config-page {
  height: 100%;
  width: 100%;
  padding: 25%;
  box-sizing: border-box;
  display: flex;
  align-items: end;
  justify-content: end;

  & .config-options-container {
    display: flex;
    flex-direction: column;

    & .option {
      margin: 0;
      padding: 10px;
    }
  }
}
</style>
