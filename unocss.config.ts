import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.5 }),
  ],
})
