import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vocalRecording: resolve(__dirname, 'vocal-recording.html'),
        musicProduction: resolve(__dirname, 'music-production.html'),
        mixingMastering: resolve(__dirname, 'mixing-mastering.html'),
        recordingStudioDelhi: resolve(__dirname, 'recording-studio-delhi.html')
      }
    }
  }
})
