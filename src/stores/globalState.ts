import { defineStore } from 'pinia'
import { reactive } from 'vue'
import LocalStorageApi from './LocalStorageApi'

const configStorage = new LocalStorageApi(
  {
    dark: true,
    swing: true,
    trackBall: true,
    opacity: 64
  },
  'config'
)

export const useGlobalState = defineStore('estado global', () => {
  const storage = reactive(configStorage.read())

  const mobile = () => {
    const status = reactive({
      isMobileSize: false
    })

    const handleMobileSize = () => {
      status.isMobileSize = window.innerWidth < 768
    }

    return {
      status,
      metod: { handleMobileSize }
    }
  }

  const trackBall = () => {
    const status = reactive({
      show: storage.trackBall,
      size: '28px',
      x: '0px',
      y: '-50px'
    })

    const trackBall = (cursor: MouseEvent) => {
      const ball = status
      const ballSize = parseFloat(ball.size)

      ball.x = `${cursor.clientX - ballSize / 2}px`
      ball.y = `${cursor.clientY - ballSize / 2}px`
    }

    const show = (v: boolean) => {
      status.show = v

      storage.trackBall = v

      configStorage.setAndReturn(storage)
    }

    return {
      status,
      metod: { trackBall, show }
    }
  }

  const darkMode = () => {
    const status = reactive({
      dark: storage.dark
    })

    const darkMode = (v: boolean) => {
      status.dark = v

      storage.dark = v

      configStorage.setAndReturn(storage)
    }

    return {
      status,
      metod: { darkMode }
    }
  }

  const swing = () => {
    const status = reactive({
      swing: storage.swing
    })

    const swingMode = (v: boolean) => {
      status.swing = v

      storage.swing = v

      configStorage.setAndReturn(storage)
    }

    return {
      status,
      metod: { swingMode }
    }
  }

  const opacity = () => {
    const status = reactive({
      opacity: storage.opacity
    })

    const setOpacity = (v: number) => {
      status.opacity = v

      storage.opacity = v

      configStorage.setAndReturn(storage)
    }

    return {
      status,
      metod: { setOpacity }
    }
  }

  return {
    trackBall: trackBall(),
    darkMode: darkMode(),
    swing: swing(),
    opacity: opacity(),
    mobile: mobile()
  }
})
