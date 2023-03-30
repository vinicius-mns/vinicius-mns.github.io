import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStyle = defineStore('globalStyle', () => {

  const cardStyle = ref({
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1.6px',
    backgroundColor: 'rgb(215, 165, 165)',
    color: 'black',
    borderRadius: '0.5rem',
  })

  const navigationStyle = ref({
    'border-top': 'none',
    'border-left': 'none',
    'border-bottom': 'none',
    'borderRadius': 'none',
  })
  
  const changeBorderWidth = (value: string) => {
    cardStyle.value.borderWidth = `${value}px`
  }
  
  const changeBorderColor = (color: string) => {
    cardStyle.value.borderColor = color
  }

  const changeBackgroundColor = (color: string) => {
    cardStyle.value.backgroundColor = color
  }

  return {
    cardStyle,
    navigationStyle,
    changeBorderWidth,
    changeBorderColor,
    changeBackgroundColor,
  }
})
