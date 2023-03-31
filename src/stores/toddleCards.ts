import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggleCard = defineStore('toddleCard', () => {

  const settings = ref(false)
  const toggleSettings = () => settings.value = !settings.value

  return {
    settings,
    toggleSettings,
  }
})
